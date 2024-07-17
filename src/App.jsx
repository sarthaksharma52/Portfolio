import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Sayhello from '../components/Sayhello'

const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar/>
      <Home/>
      <Sayhello/>
      </div>
    </div>

  )
}

export default App
