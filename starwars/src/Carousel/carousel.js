import React from 'react';
import Slider from 'react-slick';
import './carousel.css';

function Carousel(props) {
    

      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    }
    return (
      <div className='container'>
    
      
        <Slider {...settings}>
         {props.chars.map((char)=>{
            return  (
               <div className="carousel" key={char.name}>
                  <div className="char-img" onClick={()=>{props.handleChar(char.name)}}><img src={`../img/${char.name.replace(/\s+/g, '')}.jpg`} />
                  </div>
                  
               </div>
            );
         })}
        </Slider>
      </div>
    );

}
export default Carousel;

