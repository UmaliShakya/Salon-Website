import React from 'react';
import HeroSection from '../../HeroSection';
import { HeroSectionData } from '../../HeroSectionData';
import InfoSection from '../../InfoSection';
import ImageSlider from '../../ImageSlider';
import { ImageSliderData } from '../../ImageSliderData';
import OurServices from '../../OurServices';
import ContactForm from '../../ContactForm';

const First = () => {
    return (
        <div>
            <HeroSection slides={HeroSectionData}/>
            <InfoSection />
            <ImageSlider slides={ImageSliderData}/>
            <OurServices />
            <ContactForm />
        </div>
    )
}

export default First
