import React from "react";
import "./App.css";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import Header from "./components/common/Header";

function App() {
 

  return (
    <div className="lg:container min-h-screen xs:p-6">
      <Header />
      <ProductDetailsPage />
    </div>
  );
}

export default App;
