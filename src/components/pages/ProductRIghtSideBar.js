import React, {useState} from 'react'

import variantImage1 from '../pages/images/img/firstPImage.jpg';
import variantImage2 from '../pages/images/img/secondPImage.jpg';

const ProductRIghtSideBar = () => {
    const givenSize = ['XS', 'S', 'M', 'L', 'XXL'];
    const [isActive, setIsActive] = useState('L');
    const [defaultCheck, setDefaultCheck] = useState(3)

    
    
    const handleSelectedSize = (e,index) => {
        setIsActive(e.target.value)
        setDefaultCheck(index)
    }
  return (
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
                                            <button type="button" onClick={btnData=> handleSelectedSize(btnData,index)} value={btn} name={btn} className={`${defaultCheck === index ? 'bg-black text-white' : 'bg-white text-gray-800'} font-semibold py-1 mt-2 px-8 border border-gray-400 rounded-full`}>
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

  )
}

export default ProductRIghtSideBar