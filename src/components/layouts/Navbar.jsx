import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1> Digifunzi </h1>
      </div>
      <div className="links">
        <a href="/">About Us</a>
        <a href="/courses">Courses</a>
        <a href="/events">Events</a>
        <a href="/Contact">Contact Us</a>
        <a href="/pricing">Pricing</a>
        <a href="/signUp">Get Started</a>
        <a href="/signIn">Sign In</a>
      </div>
    </nav>
  )
}
