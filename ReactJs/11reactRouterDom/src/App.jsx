import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Nav from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contect';

function App() {
  
  return (
    <>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contect' element={<Contect/>} />
        </Routes>
      </div>

    </>
  )
}

export default App
