import React, { useState } from "react";
import "./App.css";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import Header from "./components/common/Header";

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepEnter = (response) => {
    setCurrentStepIndex(response.index);
  };

  return (
    <div className="lg:container lg:mx-auto min-h-screen xs:p-6 sm:p-8">
      <Header />
      <ProductDetailsPage
        handleStepEnter={handleStepEnter}
        currentStepIndex={currentStepIndex}
      />
    </div>
  );
}

export default App;
