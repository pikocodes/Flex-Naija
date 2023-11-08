import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9335987/pexels-photo-9335987.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
  // Add more image URLs as needed
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
    // className="bg-gray-100 min-h-screen flex items-center justify-center"
    className='hero'
    
    >
      <div className="overlay"></div>
      <Carousel
        selectedItem={currentIndex}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop
        className='carousel'
      >
        {images.map((image, index) => (
          <div key={index} 
          className='slide'>
            <img className='background-image' src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
