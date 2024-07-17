import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Sayhello from '../components/Sayhello'
import About from '../components/About'


const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar/>
      <Home/>
      <About/>
      <Sayhello/>
      </div>
    </div>

  )
}

export default App
