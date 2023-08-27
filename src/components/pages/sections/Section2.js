import image2 from '../images/img/backNsideImg.jpg';
const styles = {
    maxWidth: '562.5px',
    maxHeight: '675px',
    flexShrink: 0
}
const Section2 = () => {
    return (
        <>
            <img src={image2} style={styles} loading='lazy' alt="Product Image2" className="w-full scroll-snap-align-start" />
        </>
    )
}

export default Section2