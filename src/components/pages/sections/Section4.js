
import image4 from '../images/img/standupwithbook.jpg';
const styles = {
    maxWidth: '562.5px',
    maxHeight: '675px',
    flexShrink: 0
}
const Section4 = () => {
    return (
        <>
           
            <img src={image4} loading='lazy' style={styles} alt="Product Image4" className="w-full scroll-snap-align-start" />
        </>
    )
}

export default Section4