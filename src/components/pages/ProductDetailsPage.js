import { Scrollama, Step } from "react-scrollama";
import Section1 from "../pages/sections/Section1";
import Section2 from "../pages/sections/Section2";
import Section3 from "../pages/sections/Section3";
import Section4 from "../pages/sections/Section4";
import variantImage1 from '../pages/images/img/firstPImage.jpg';
import variantImage2 from '../pages/images/img/secondPImage.jpg';
import Carousel from "./Carousel";
import { useState } from "react";
import image2 from '../pages/images/img/bigfront.jpg';
import image3 from '../pages/images/img/backsideImg.jpg';
import image4 from '../pages/images/img/sideImg.jpg';
import image5 from '../pages/images/img/standupwithbook.jpg';

const ProductDetailsPage = ({ handleStepEnter, currentStepIndex }) => {
    const [isActive, setIsActive] = useState('L')
    const [defaultCheck, setDefaultCheck] = useState(3)

    const imageVariants = [
        image2, image3, image4, image5
    ]
    const givenSize = ['XS', 'S', 'M', 'L', 'XXL']
    const handleSelectedSize = (e,index) => {
        setIsActive(e.target.value)
        setDefaultCheck(index)


    }
    const sections = [
        {
            id: "section-1",
            title: "Section 1",
            content: (
                <div className="bg-white">
                    <Section1 />
                </div>
            ),
        },
        {
            id: "section-2",
            title: "Section 2",
            content: (
                <Section2 />
            ),
        },
        {
            id: "section-3",
            title: "Section 3",
            content: (
                <Section3 />
            ),
        },
        {
            id: "section-4",
            title: "Section 4",
            content: (
                <Section4 />
            ),
        },
        // Add more sections as needed
    ];

    return (
        <div className="mainContent relative w-full md:w-[1298px] md:mx-auto ">
            <Carousel pdpImgs={imageVariants} />
            <div className="flex pdpContainer">

                <aside className="w-1/4 hidden md:block">
                    <div className="bg-white sticky top-0">
                        <div className="flex justify-between items-center uppercase">
                            <span className="font-bold color-black">Details</span>
                            <span>Delivery</span>
                            <span>Fit</span>
                            <span>Share</span>
                        </div>
                        <p>
                            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.</p>
                        <p className="py-8">See the EDITOR’S NOTE</p>
                        <p> Learn about the DESIGNER</p>
                    </div>
                </aside>

                {/* Start: Scrollable Content */}
                <main className="md:w-[562.5px] w-full m-auto relative hidden lg:block">
                    <span className={`heartIconStatic`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="md:relative md:top-8">
                            <g clipPath="url(#clip0_9156_928)">
                                <path d="M0.893511 7.47065C0.165713 5.67456 0.532604 4.14725 1.30249 3.06233C2.09396 1.94699 3.28159 1.3335 4.14495 1.3335C5.05662 1.3335 5.84717 1.5457 6.64071 2.06853C7.44826 2.60059 8.28092 3.46893 9.24074 4.82078C9.61094 5.34217 10.3891 5.34217 10.7593 4.82078C11.7191 3.46892 12.5518 2.60059 13.3593 2.06853C14.1528 1.5457 14.9434 1.3335 15.855 1.3335C16.7184 1.3335 17.906 1.94699 18.6975 3.06233C19.4674 4.14725 19.8343 5.67456 19.1065 7.47065C18.6453 8.60892 17.8301 9.53817 16.7597 10.5453C16.4026 10.8813 16.0119 11.2302 15.5995 11.5983C14.8035 12.3092 13.9267 13.092 13.0554 13.9933C12.3118 14.7626 11.5056 15.885 10.8645 16.8475C10.4666 17.445 9.53342 17.445 9.13548 16.8475C8.49442 15.885 7.68819 14.7626 6.94457 13.9933C6.07327 13.092 5.19655 12.3092 4.40047 11.5984C3.98813 11.2302 3.59742 10.8813 3.24031 10.5453C2.16992 9.53817 1.35475 8.60892 0.893511 7.47065Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9156_928">
                                    <rect width="20" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <Scrollama onStepEnter={handleStepEnter}>
                        {sections.map((section, index) => (
                            <Step key={section.id}>
                                <div
                                    className={`styickImgGroup mb-2 ${currentStepIndex === index ? "is-active" : ""
                                        }`}
                                >

                                    <h2 className="hidden font-semibold">{section.title}</h2>
                                    {section.content}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>

                </main>


                <aside className="w-full lg:w-1/4 xl:w-1/4 xs:w-full pt-20 relative">

                    {/* End: Scrollable Content */}
                    <div className="bg-white itemPriceBox sticky top-0">
                        <h2 className=' xs:text-[32px] sm:text-[32px]'>JONATHAN SIMKHAI</h2>
                        <p className="pt-2 pb-3">Lurex Linen Viscose Jacket in Conchiglia</p>
                        <p className="price pb-6 font-bold">$225</p>
                        <p className="color pb-2">Color Conchiglia</p>
                        <div className="variants flex justify-items-start mb-6">
                            <img src={variantImage1} className="object-none h-16 w-16" alt="first 1" />
                            <img src={variantImage2} className="object-none h-16 w-16" alt="scrollable 2" loading="lazy" />
                        </div>
                        <div className="flex size justify-between items-center mt-3 mb-2">
                            <span className="selectedSize">Size <cite>{isActive}</cite></span>
                            <a href="/sizeGuide" className="underline uppercase">Size-guide</a>
                        </div>
                        <div className="sizeBox size">
                            {/* Size Selection */}
                            <div className="flex justify-between items-center w-[324px] flex-wrap">
                                {
                                    givenSize.map((btn,index) => {
                                        return (
                                            <button type="button" onClick={btnData=> handleSelectedSize(btnData,index)} value={btn} name={btn} className={`${defaultCheck === index ? 'bg-black text-white' : 'bg-white text-gray-800'} hover:bg-gray-100  font-semibold py-1 mt-2 px-8 border border-gray-400 rounded-full`}>
                                                {btn}   
                                            </button>
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="addToBag w-full">Add to Bag</button>
                        </div>
                        <p className="pb-4">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                        <p>Speak to a Personal Stylist CHAT NOW</p>
                    </div>
                </aside>

            </div>
            <div className="w-2/4 flex flex-col mx-auto my-px">
                <ul className='clothBrandParent mt-[100px]'>
                    <li>Jonathan Simkhai</li>
                    <li>Blazers</li>
                    <li>Viscose</li>

                </ul>
                <div className='noteFromEditor'>
                    a note from the editor
                </div>
                <p className='editorPara'>
                    The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
                </p>
                <div className='editorBy flex justify-center items-center'> <div className="h-[1px] w-[28px] mr-[8px] bg-gray-500"></div>
                    By MINNA SHIM, Fashion Editor</div>
            </div>
        </div>
    );
}

export default ProductDetailsPage
