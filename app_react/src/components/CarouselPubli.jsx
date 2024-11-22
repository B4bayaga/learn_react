import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageComponent from './ImageComponent.jsx';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

function CarouselPubli() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          // https://www.npmjs.com/package/react-multi-carousel
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 628 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 628, min: 0 },
          items: 1
        }
      };
    
    return (
      <Carousel responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
          >
          <ImageComponent src={ img1 } alt="imagem"/>
          <ImageComponent src={ img2 } alt="imagem"/>
          <ImageComponent src={ img3 } alt="imagem"/>
          <ImageComponent src={ img4 } alt="imagem"/>
          <ImageComponent src={ img5 } alt="imagem"/>
      </Carousel>
    );
};

export default CarouselPubli