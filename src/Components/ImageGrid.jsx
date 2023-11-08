import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.src} alt={image.alt} className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
