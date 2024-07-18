import React from 'react';
import { Link } from 'react-router-dom';

const Sayhello = () => {
  return (
    <>
    <div className="sayHello">
    <div 
    className="section1sayhello">
    <p className='hello'>.say hello</p>
    <div className="hrsayhello"><hr/></div>
    </div>

    <div className="text-gradient-hello">
    why don't you come say hi@sarthak.dec04@gmail.com
    </div>

    <div className="buttonsayhello">
    <Link to="/Contact" className='nav_items c1'> <button className='sayhellobtn'>contact me</button></Link>
       
    </div>
    </div>
      
    </>
  )
}

export default Sayhello
