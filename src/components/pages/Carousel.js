import React, { useState } from 'react';
import image2 from '../pages/images/img/bigfront.jpg';
import image3 from '../pages/images/img/backsideImg.jpg';
import image4 from '../pages/images/img/sideImg.jpg';
import image5 from '../pages/images/img/standupwithbook.jpg';
const CarouselWithDots = () => {
  const pdpImgs = [
    image2, image3, image4, image5
]
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
