import React from 'react'
import pdf from '../components/pdf/Sarthak-resume .pdf'
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
        
        <a href="https://www.linkedin.com/in/sarthak-sharma-778b28257/" target='_blank' className='footer_items_icon'>linkedin</a>
        <a href="" className='footer_items_icon'>insta</a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer
