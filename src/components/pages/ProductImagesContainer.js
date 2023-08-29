import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import ImageJson from './sections.json';
import HeartIcon from '../common/HeartIcon';

const ProductImagesContainer = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepEnter = (response) => {
    setCurrentStepIndex(response.index);
  };

  return (
    <main className="md:w-[562.5px] w-full m-auto relative hidden lg:block">
      <HeartIcon />
      <Scrollama onStepEnter={handleStepEnter}>
        {ImageJson.map((section, index) => (
          <Step key={section.id}>
            <div className={`styickImgGroup mb-2 ${currentStepIndex === index ? 'is-active' : ''}`}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${section.src}`}
                alt={section.props.alt}
                {...section.props}
              />
            </div>
          </Step>
        ))}
      </Scrollama>
    </main>
  );
};

export default ProductImagesContainer;
