import React from 'react'
import { navbarLogo } from '../util/config'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo image-crop-container " >
          <img src={navbarLogo} style={{objectFit: 'cover'}} className='navbar-logo ' width={343} height={73} alt="Digifunzi" />
      </div >
      <div className="links mid">
        <a href="/">About Us</a>
        <a href="/courses">Courses</a>
        <a href="/events">Events</a>
        <a href="/Contact">Contact Us</a>
        <a href="/pricing">Pricing</a>
        <a href="/api">Get Started</a>
        <a href="/signIn">Sign In</a>
      </div>
    </nav>
  )
}
