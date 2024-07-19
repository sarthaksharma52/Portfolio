import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Aos from 'aos';
import "Aos/dist/aos.css"


const App = () => {

  
  useEffect(()=>{
    Aos.init({
      once: true,
    });

  },[])


  return (
      <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
  );
}

export default App;
