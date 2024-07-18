import React from "react";
import Sayhello from "../components/Sayhello";
import Skills from '../components/Skills';


const About1 = () => {
  return (
    <>
      <div className="about mt-5">
        <div className="aboutsection">
        <div className="aboutHeading text-gradient-aboutnew">about</div>
        <div className="aboutContent text-gradient-aboutnew ">
          I'm a designer, maker, gamer, and anime lover obsessed with the world
          of digital
        </div>
        </div>
        
      </div>

      <Skills/>
      <Sayhello />
    </>
  );
};

export default About1;
