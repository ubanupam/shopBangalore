import React from "react";
import "./App.css";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import Header from "./components/common/Header";

function App() {
 

  return (
    <div className="lg:container lg:mx-auto min-h-screen xs:p-6 sm:p-8">
      <Header />
      <ProductDetailsPage />
    </div>
  );
}

export default App;
