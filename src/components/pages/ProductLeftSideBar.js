import React from 'react'

const ProductLeftSideBar = () => {
    return (

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
    )
}

export default ProductLeftSideBar