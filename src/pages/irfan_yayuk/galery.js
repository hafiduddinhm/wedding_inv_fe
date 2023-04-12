import './App.css'
import React, { forwardRef, useState, useRef, useEffect } from "react";
import backgroundImage from '../../assets/image/bg.png';
import { Box } from '@mui/system';
import Slider from 'react-slick';
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageCarouselWrapper = styled(Box)`
  padding: 5px;
  .slick-slide img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    margin: 0 auto;
    max-height: 300px;
  }

  .pop-up-image {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .pop-up-image img {
    max-width: 80%;
    max-height: 80%;
    margin: auto;
  }
  
  .pop-up-image button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }  
`;

const imageToShow = [
    "/media/1.jpg",
    "/media/2.jpg",
    "/media/3.jpg",
    "/media/4.jpg",
    "/media/5.jpg",
    "/media/6.jpg",
    "/media/7.jpg",
];

const Gallery = forwardRef((props, sectionRef) => {
    let mainSlider = useRef()
    let thumbnailSlider = useRef()
    const [selectedImage, setSelectedImage] = useState(null);


    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: thumbnailSlider.current,
    };

    const settings2 = {
        dots: true,
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: mainSlider.current,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };

    return (
    <section ref={sectionRef} style={{ backgroundImage: `url(${backgroundImage})`, overflowX: 'hidden' }}>
      <ImageCarouselWrapper>
          <Slider {...settings1} ref={mainSlider} >
              {imageToShow.map((imageUrl, index) => (
                  <div key={index}>
                      <img src={imageUrl} alt={`Image ${index}`} onClick={() => setSelectedImage(imageUrl)} />
                  </div>
              ))}
          </Slider>
          <Slider {...settings2} ref={thumbnailSlider} >
              {imageToShow.map((imageUrl, index) => (
                  <div key={index}>
                      <img src={imageUrl} alt={`Image ${index}`} />
                  </div>
              ))}
          </Slider>
          {selectedImage && (
            <PopUpImage
              imageUrl={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
      </ImageCarouselWrapper>
    </section>
    );
})

const PopUpImage = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('pop-up-image')) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="pop-up-image">
      <img src={imageUrl} alt="Pop-up" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};



export default Gallery;