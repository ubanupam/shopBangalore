import image3 from '../images/img/bigfront.jpg';
const styles = {
    maxWidth: '562.5px',
    maxHeight: '675px',
    flexShrink: 0
}
const Section3 = () => {
    return (
        <>
            <img src={image3} style={styles} loading='lazy' alt="Product Image3" className="w-full scroll-snap-align-start" />
        </>
    )
}

export default Section3