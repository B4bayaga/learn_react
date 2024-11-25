import React, { useState } from "react";
import { Box, Button, TextField, Typography, FormGroup, FormControlLabel, Checkbox, Divider } from "@mui/material";
import LogoAzul from './LogoAzul.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
          // Envia uma requisição para o backend
          const response = await fetch("http://localhost:8000/auth/token", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                  username: email,
                  password: password,
              }),
          });
  
          if (response.status === 303) {
              // Se o código de status for 303 (See Other), significa que o backend quer redirecionar
              const redirectUrl = response.headers.get('Location');
              if (redirectUrl) {
                  // Redireciona manualmente para a URL fornecida pelo backend
                  navigate('/');
              }
          } else if (response.ok) {
              // Se o login for bem-sucedido, o backend define o cookie com o token
              const data = await response.json();
              // Armazenando o token de acesso no localStorage (ou pode usar o cookie)
              // localStorage.setItem("JWTacess", data.access_token);
              // Redireciona o usuário após login
              navigate('/');  // Ou outra página que você queira redirecionar após o login
          } else {
              // Se houver erro, exibe uma mensagem de erro
              const data = await response.json();
              setError(data.detail || "Erro ao tentar fazer login");
          }
      } catch (error) {
          console.error("Erro ao tentar se conectar ao servidor", error);
          setError("Erro de conexão com o servidor");
      }
  };
  

    return (
        <Box
            display='flex'
            flexDirection='column'
            mt={10}
            mx={'auto'}
            minHeight='70vh'
            maxWidth={420}
            padding={3}
            borderRadius={1}
            boxShadow={8}
        >
            <Box align='center'>
                <LogoAzul height={52} />
            </Box>
            <Typography
                align="center"
                mt={1}
                sx={{
                    color: '#162B58',
                    mb: 2,
                    fontFamily: 'PT Sans',
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: -0.72,
                }}
            >
                Sign In
            </Typography>
            {error && (
                <Typography
                    sx={{
                        color: 'red',
                        fontSize: 14,
                        textAlign: 'center',
                        marginBottom: 2,
                    }}
                >
                    {error}
                </Typography>
            )}
            <Box display={"flex"} flexDirection={"column"} gap={2}>
                <TextField
                    type="email"
                    label="e-mail"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box display="flex" justifyContent="space-between">
                    <Link>Esqueci a senha!</Link>
                    <Link>Não tem cadastro?</Link>
                </Box>
                <FormGroup sx={{ marginLeft: '2' }}>
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                        label="Lembre-me"
                        sx={{ color: '#162B58' }}
                    />
                </FormGroup>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#0057FF',
                        fontFamily: 'PT Sans',
                        fontSize: 18,
                        fontWeight: 700,
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Box display="flex" alignItems="center">
                    <Divider sx={{ flex: 1 }} />
                    <Typography sx={{ padding: '0 10px', color: '#162B58', opacity: 0.6 }}>ou</Typography>
                    <Divider sx={{ flex: 1 }} />
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={2} maxWidth={320} mx={'auto'}>
                    <Button variant="outlined">login com google</Button>
                    <Button variant="outlined">login com instagram</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
