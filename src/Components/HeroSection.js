import React from 'react'
import '../style/Herosection.css';
import myvid from '../videos/Scrolling.mp4';
function HeroSection() {
    return (
        <div className='hero-container' >
            <video controls autoPlay loop muted>
                <source src={myvid} type="video/mp4"/>
            </video>
            <h1 data-testid='intro'>A Picture is a poem without words.</h1>
            <p data-testid='about'>What are you waiting for?Go ahead...</p>
        </div>
    )
}

export default HeroSection
