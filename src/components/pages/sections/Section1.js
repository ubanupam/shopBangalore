import image1 from '../images/img/firstStandUpImg.jpg';

const Section1 = () => {
    return (
        <>
            <img src={image1} loading='lazy' width="562.5px" height="675px" alt="Product Image1" className="w-full scroll-snap-align-start" />
        </>
    )
}

export default Section1
