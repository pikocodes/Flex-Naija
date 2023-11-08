import React from 'react';

const Card = ({src, alt, title, address, feature}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Card Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Card Content */}
      {/* Name and Address */}
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">{address}</p>
      </div>

      {/* Feature */}
      <div className="absolute top-0 right-0 py-1 px-3 bg-orange-600  rounded-sm m-3">
        <h3 className="text-white text-xs font-medium">{feature}</h3>
      </div>
    </div>
  );
};

export default Card;
