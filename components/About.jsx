import React from 'react';
import image from '../public/assets/sarthakimg.jpg';

const About = () => {
  return (
    <>
    <div className="aboutmain">
      <div 
    className="section1about">
    <p className='about'>.about</p>
    <div className="hrabout"><hr/></div>
    </div>
    <div className="about-box">
    <div className="text-gradient-about">
    Based in India/UP, MERN stack developer experience of different verity of projects. A passionate developer and I love what I do, and I strongly believe in;  "The less it is the cooler is your interface"

    </div>
    <div className="about-image">
        
    </div>
    </div>

    <div className="buttonsayhello">
        <button className='sayhellobtn'>about  me</button>
    </div>
        {/* <img src="{image}" alt="image" /> */}
    </div>
    </>
  )
}

export default About
