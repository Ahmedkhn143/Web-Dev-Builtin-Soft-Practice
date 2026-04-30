import React from 'react'
import './Navbar.css'
import vvv from '../assets/logo.webp'
function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        
        <img src={vvv} alt="Logo" className="logo" />

        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

// state in react
