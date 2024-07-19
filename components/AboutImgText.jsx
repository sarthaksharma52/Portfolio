import React from "react";
import image from "../public/Images 2/proimg/sarthakportfolio.jpg";
// import '../path/to/your/styles.css'; // Ensure you import your stylesheet

const AboutImgText = () => {
  return (
    <>
      <div className="about-box1">
      <div className="section1about">
          <p className="about1">.about</p>
          <div className="hrabout">
            <hr />
          </div>
        </div>
        <div className="about-box">
        
        <div className="text-gradient-about">
          Based in India/UP, MERN stack developer experience of different
          variety of projects. A passionate developer and I love what I do, and
          I strongly believe in; "The less it is the cooler is your interface"
        </div>
        <div className="about-image"
        // data-aos="fade-down"
        // data-aos-duration="1000"
        >
          <img src={image} alt="img" />
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutImgText;
