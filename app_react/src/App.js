import * as React from 'react';
import NavBar from './components/NavBar'
import CarouselBlog from './components/carousel';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ActionAreaCard from './components/CardBlog';
import Footer from './components/Footer';


function App() {
  const cards = [
    {
      occupation: 'Pedreiro',
      description: 'O que temos que ter sempre em mente é que a competitividade nas transações comerciais auxilia a preparação e a composição dos índices pretendidos.'
    },
    {
      occupation: 'Eletricista',
      description: 'A prática cotidiana prova que o desenvolvimento contínuo de distintas formas de atuação maximiza as possibilidades por conta das condições financeiras.'
    },
    {
      occupation: 'Encanador',
      description: 'O incentivo ao avanço tecnológico, assim como a expansão dos mercados mundiais facilita a criação do fluxo de informações.'
    },
    {
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
    {
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
    {
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
  ];

  return (
    <div>
      <NavBar />
      <Box mb={10} />

      <CarouselBlog />

      <Box mb={8} />

      <Container maxWidth="xl">
        <Typography variant="h3"
        sx={{
          mr: 2,
          display: 'flex',
          maxWidth: 198,
          height: 22,
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'PT Sans',
          fontSize: 32,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '-0.96px',
          color: '#09204B',
          textDecoration: 'none',
        }}
        >
        Blogs Recentes
        </Typography>
      </Container>

      <Box mb={4} />

      <Container maxWidth="xl">
        <Box className="p-4">
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}
          >
            {cards.map((card, index) => (
              <Grid 
                item 
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="flex"
              >
                <Box className="w-full p-2">
                  <ActionAreaCard
                    occupation={card.occupation}
                    description={card.description}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box mb={14} />

      <Footer />
      
    </div>
  );
};

export default App;
