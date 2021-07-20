import React from 'react';
import HeroSection from '../../HeroSection';
import { HeroSectionData } from '../../HeroSectionData';

const Home = () => {
    return (
        <>
            <HeroSection slides={HeroSectionData}/>
        </>
    )
}

export default Home
