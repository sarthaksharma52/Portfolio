import React from 'react';
import {Link} from 'react-router-dom'
// import image from '../public/assets/';

const About = () => {
  return (
    <>
    <div className="aboutmain">
      <div 
    className="section1about">
    <p className='about1'>.about</p>
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
    <Link to="/About" className='btn'><button className='sayhellobtn'>about me</button></Link>
        
    </div>
        {/* <img src="{image}" alt="image" /> */}
    </div>
    </>
  )
}

export default About
