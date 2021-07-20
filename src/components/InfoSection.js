import React from 'react';
import { Button } from './Button';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <div>
            <div className="info-section">
                <div className="info-container">
                    <div className="column-left">
                        <h1 className="info-heading">About Suresh</h1>
                        <p className="info-para">Diure autem temporibus nesciunt maxime reprehenderit!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nulla, in natus est quisquam distinctio cupiditate delectus laboriosam, illum, tenetur dicta beatae excepturi!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nulla, in natus est quisquam distinctio cupiditate delectus laboriosam, illum, tenetur dicta beatae excepturi iure autem temporibus nesciunt maxime reprehenderit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nulla, in natus est quisquam distinctio cupiditate delectus laboriosam, illum, tenetur dicta beatae excepturi iure autem temporibus nesciunt maxime reprehenderit!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nulla, in natus est quisquam distinctio cupiditate delectus laboriosam, illum, tenetur dicta beatae excepturi iure autem temporibus nesciunt maxime reprehenderit!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cum nulla, in natus est quisquam distinctio cupiditate delectus laboriosam, illum, tenetur dicta beatae excepturi iure autem temporibus nesciunt maxime reprehenderit!</p>
                        <Button to='./HeroSection.js' primary='true' className="btn--primary">View Home</Button>
                    </div>
                    <div className="column-right">
                        <img className="about" src="/images/info.jpg" alt="Not Found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
