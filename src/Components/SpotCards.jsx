import React from 'react';

const SpotCards = ({src, alt, title}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* SpotCards Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* SpotCards Content */}
      {/* Name and Address */}
      <div className="absolute bottom-0 left-0 my-0 bg-black py-4 px-3 bg-opacity-30 w-full">
        <h3 className="text-white text-sm text-center font-bold ">{title}</h3>
      </div>

    </div>
  );
};

export default SpotCards;
