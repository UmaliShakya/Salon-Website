import React from 'react';
import ImageSlider from '../../ImageSlider';
import { ImageSliderData } from '../../ImageSliderData';

const Gallery = () => {
    return (
        <div>
            <ImageSlider slides={ImageSliderData}/>
        </div>
    )
}

export default Gallery
