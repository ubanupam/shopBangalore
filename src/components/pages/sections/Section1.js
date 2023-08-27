import image1 from '../images/img/firstStandUpImg.jpg';
const styles = {
    maxWidth: '562.5px',
    maxHeight: '675px',
    flexShrink: 0
}
const Section1 = () => {
    return (
        <>
            <img src={image1} style={styles} loading='lazy' alt="Product Image1" className="w-full scroll-snap-align-start" />
        </>
    )
}

export default Section1