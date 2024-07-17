import React from 'react';
import pdf from '../components/pdf/Sarthak-resume .pdf';
import instagramIcon from '../public/assets/instagram.png';
import githubIcon from '../public/assets/github.png';
import linkedinIcon from '../public/assets/linkedin.png';

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="container footer">
          <div className="left footer_items">Sarthak Sharma</div>
          <div className="mid">
            <a href="" className='footer_items'>projects</a>
            <a href="" className='footer_items'>about</a>
            <a href="" className='footer_items'>contact</a>
            <a href={pdf} download="Sarthak_Sharma_Resume.pdf" className='footer_items'>resume</a>
          </div>
          <div className="right">
            <a href="https://www.linkedin.com/in/sarthak-sharma-778b28257/" target='_blank' className='footer_items_icon'>
            <img src={linkedinIcon} alt="linkedin" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.instagram.com/exe.sarthak/" className='footer_items_icon'>
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://github.com/sarthaksharma52" target="_blank" className='footer_items_icon'>
                <img src={githubIcon} alt="github" style={{ width: '24px', height: '24px' }} />
                </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
