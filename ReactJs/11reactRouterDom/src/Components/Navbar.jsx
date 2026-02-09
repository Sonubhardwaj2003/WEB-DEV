import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  
  return (
    <>
      <div id='nav'>
        <h2>NavBar</h2>
        <div id='page'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contect'>Contect</Link>
        </div>
      </div>
    </>
  )
}

export default Nav
