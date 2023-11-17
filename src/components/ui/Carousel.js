import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({imgArr}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true
  };

  return (
      <Slider {...settings}>
        {
          imgArr.map(current => {
            return (
              <div key={current}>
                <img src={current} alt={current} style={{width: '50%', height: '20vh', margin: '0 auto'}} />
              </div>
            )
          })
        }
      </Slider>
   
  )
};

export default Carousel;
