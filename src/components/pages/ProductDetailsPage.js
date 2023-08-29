import React from "react";
import Carousel from "./Carousel";
import ProductLeftSideBar from "./ProductLeftSideBar";
import ProductImagesContainer from "./ProductImagesContainer";
import ProductRIghtSideBar from "./ProductRIghtSideBar";
import ProductFeaturePart from "./ProductFeaturePart";

const ProductDetailsPage = () => {
    return (
        <div className="mainContent relative w-full md:w-[1298px] md:mx-auto ">
            <Carousel />
            <div className="flex pdpContainer">
                <ProductLeftSideBar />
                {/* Start: Scrollable Content */}
                <ProductImagesContainer />
                {/* End: Scrollable Content */}
                <ProductRIghtSideBar />
            </div>
            <ProductFeaturePart />
        </div>
    );
}
export default ProductDetailsPage
