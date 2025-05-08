import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




const Carusel = ({images}) => {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={true} useKeyboardArrows={true} transitionTime={10} >
        {images.map(image => ( 
          <div>
          <img src={image} className="Works" alt="Image 1" />
        </div>
        ))}
        
      </Carousel>
    </div>
  );
};

export default Carusel;
