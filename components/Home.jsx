import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
      strings: [
        "branding","user experience","interactive experiences",
      ],
      typeSpeed:60,
      backSpeed:60,
      loop:true,
    };
    const typed = new Typed(typedRef.current, options);
    return() => {
      typed.destroy();
    };
  },[]);
  return (
    <>
    <div className="home">
    <div className="hr">
    <div className="sectin1">
    <p className="text-gradient">
    Oh, Hello there! 
    </p>
    <p className="text-gradient"></p>
    </div>
    <br />
    <br />
    
    <p className='text-gradient1'>I'm Sarthak Sharma, a mern stack developer specialized in creating crisp and catchy</p>
    <p className='text-gradient2' ref={typedRef}>

    </p>
    </div>
    </div>
    </>
  )
}

export default Home
