import React, { useState } from 'react';

const CarouselWithDots = ({ pdpImgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative md:hidden lg:hidden w-full">
      <div className="flex overflow-x-hidden">
        {pdpImgs.map((pdpImgItem, index) => (
          <img
            key={index}
            src={pdpImgItem}
            alt={`pdpImg ${index}`}
            className={`w-full transform transition-transform duration-300 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          />
        ))}
      </div>
      <div className="flex mt-2 justify-center">
        {pdpImgs.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full focus:outline-none ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselWithDots;
