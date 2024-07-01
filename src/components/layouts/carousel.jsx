
import React from 'react';
import Slider from 'react-slick';
import styles from '../../styles/carousel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className={styles.carouselContainer}>
            <div className='box-shadow'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image} alt={`Slide ${index}`} className={styles.image} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default ImageCarousel;
