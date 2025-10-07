import React from 'react';

const HeroImage = ({ src, title }) => {
  return (
    <div className="h-80 overflow-hidden">
      <img src={src} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroImage;
