import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function ActionAreaCard({ occupation, description, img, textoMensagem, numeroContato }) {
  const codificarMensagem = (textoMensagem) => {
    return encodeURIComponent(textoMensagem);
  };

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: '6px 6px 0 0',
      width: '100%', // Faz o card ocupar 100% da largura da linha
        '@media (max-width: 440px)': {
          maxWidth: '100%', // Ajuste para telas menores que 440px
        },
      }}
      elevation={10} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={ img }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" 
          sx={{
            color: '#162B58',
            fontFamily: 'PT Sans',
            fontSize: 28,
            fontStyle:'normal',
            fontWeight: 700,
            letterSpacing:-0.72,
            }}>
            Contrata-se { occupation }
          </Typography>
          <Typography variant="body2" 
          sx={{
            color: '#4C6290',
            fontFamily: 'PT Sans',
            fontSize: 20,
            fontStyle:'normal',
            fontWeight: 400,
            letterSpacing:-0.6,
          }}>
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" startIcon={<WhatsAppIcon />}
        sx={{
          fontFamily: 'PT Sans',
        }}
        onClick={() => window.open(`https://wa.me/${numeroContato}?text=${codificarMensagem}`, '_blank')}
        >
          Contato
        </Button>
      </CardActions>
    </Card>
  );
}

export default ActionAreaCard