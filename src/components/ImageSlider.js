import React, { useState } from 'react';
import './ImageSlider.css';
import { ImageSliderData } from './ImageSliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}
console.log(current);
const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
} 
    return (
      
            <div className="slider-section">
                <div className="slider-container">
                <h1 className="slider-heading">Gallery</h1>
                {ImageSliderData.map((slide, index) => {
                 return (
                <div className="card-slide" key={index}>
                    {index === current && (
                    <div className="card-row">
                    <FaArrowAltCircleLeft onClick={prevSlide} css={`
                    position: absolute;
                    top: 50;
                    left: 2px;
                    font-size: 3rem;
                    color: #000;
                    z-index: 10;
                    cursor: pointer;
                    user-select: none;
                `}/>
                    <div className="card"><img className="card-image" src={slide.image1} alt="" /></div>
                    <div className="card"><img className="card-image" src={slide.image2} alt="" /></div>
                    <div className="card"><img className="card-image" src={slide.image3} alt="" /></div>
                    <FaArrowAltCircleRight onClick={nextSlide} css={`
                    position: absolute;
                    top: 50;
                    right: 2px;
                    font-size: 3rem;
                    color: #000;
                    z-index: 10;
                    cursor: pointer;
                    user-select: none;
                    `}/>
                    </div>
                )}
                </div>
                );
        })}
            </div>
        </div>

    )
}

export default ImageSlider
