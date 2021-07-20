import React, { useEffect, useState, useRef } from 'react';
import styled, {css}  from 'styled-components';
import './HeroSection.css';
import { HeroSectionData } from './HeroSectionData.js';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const arrowButtons = css`
    width:  50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;


const HeroSection = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1));
            };
            timeout.current = setTimeout(nextSlide, 4000);

        return function() {
            if (timeout.current){
                clearTimeout(timeout.current);
            }
        };
        },
        [current, length]
    );

        const nextSlide = () => {
            if (timeout.current){
                clearTimeout(timeout.current);
            }
            setCurrent(current === length - 1 ? 0 : current + 1);
        
            // console.log(current);
        };
        
        const prevSlide = () => {
            if (timeout.current){
                clearTimeout(timeout.current);
            }
            setCurrent(current === 0 ? length - 1 : current - 1);
        
            // console.log(current);
        };
        
        if(!Array.isArray(slides) || slides.length <= 0){
            return null
        };
        

    return (
        <div>
            <section className="Hero-section">
                <div className="Hero-Wrapper">
                    {slides.map((slide, index) => {
                    return (
                    <div className="Hero-slide" key={index}>
                        {index === current && (
                        <div className="Hero-slider">
                           <img src={slide.image} alt={slide.alt} className="Hero-image" />
                                <div className="hero-content">
                                    <h1 className="hero-heading">{slide.title1}</h1>
                                    <p className="hero-label">{slide.title2}</p>
                                    <div className="slider-buttons">
                                        <PrevArrow className="prevArrow" onClick={prevSlide} />
                                        <NextArrow className="NextArrow" onClick={nextSlide} />
                                    </div>
                                </div>
                        </div>
                         )} 
                    </div>
                    )
                })}
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
