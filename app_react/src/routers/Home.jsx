import * as React from 'react';
import NavBarLogin from '../components/NavBarLogin';
import CarouselPubli from '../components/CarouselPubli.jsx';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardBlog from '../components/CardBlog.jsx';
import Footer from '../components/Footer.jsx';
import imgVertical from '../assets/img_vertical.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';


function Home() {
  const cards = [
    {
      img: img1,
      occupation: 'Pedreiro',
      description: 'O que temos que ter sempre em mente é que a competitividade nas transações comerciais auxilia a preparação e a composição dos índices pretendidos.'
    },
    {
      img: img2,
      occupation: 'Eletricista',
      description: 'A prática cotidiana prova que o desenvolvimento contínuo de distintas formas de atuação maximiza as possibilidades por conta das condições financeiras.'
    },
    {
      img: img3,
      occupation: 'Encanador',
      description: 'O incentivo ao avanço tecnológico, assim como a expansão dos mercados mundiais facilita a criação do fluxo de informações.'
    },
    {
      img: img4,
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
    {
      img: img5,
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
    {
      img: imgVertical,
      occupation: 'Pintor',
      description: 'As experiências acumuladas demonstram que a execução dos pontos do programa estimula a padronização das direções preferenciais.'
    },
  ];

  return (
    <div>
      <NavBarLogin />
      <Box mb={10} />

      <CarouselPubli />

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
                  <CardBlog
                    occupation={card.occupation}
                    description={card.description}
                    img={card.img}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box mb={2} />

      <Footer />
      
    </div>
  );
};

export default Home;