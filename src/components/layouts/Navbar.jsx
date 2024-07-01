import React, { useState } from 'react'
import { navbarLogo } from '../util/config'
import styles from '../../styles/Navbar.module.css';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo image-crop-container " >
//           <img src={navbarLogo} style={{objectFit: 'cover'}} className='navbar-logo ' width={343} height={73} alt="Digifunzi" />
//       </div >
//       <div className="links mid">
//         <a href="/">About Us</a>
//         <a href="/courses">Courses</a>
//         <a href="/events">Events</a>
//         <a href="/Contact">Contact Us</a>
//         <a href="/pricing">Pricing</a>
//         <a href="/api">Get Started</a>
//         <a href="/signIn">Sign In</a>
//       </div>
//     </nav>
//   )
// }

const Nav = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className={styles.navbar} style={{display: 'flex', width: '100%' }}>
            <div className={styles.logo}>
            <img src={navbarLogo} style={{objectFit: 'cover'}} className='navbar-logo ' width={343} height={73} alt="Digifunzi" />
            </div>
            <div className={styles.links}>
                <a 
                    href="/" 
                    className={activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                >
                    About Us
                </a>
                <a 
                    href="/courses" 
                    className={activeLink === '/courses' ? 'active' : ''}
                    onClick={() => handleLinkClick('/courses')}
                >
                    Courses
                </a>
                <a 
                    href="/events" 
                    className={activeLink === '/events' ? 'active' : ''}
                    onClick={() => handleLinkClick('/events')}
                >
                    Events
                </a>
                <a 
                    href="/Contact" 
                    className={activeLink === '/Contact' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Contact')}
                >
                    Contact Us
                </a>
                <a 
                    href="/pricing" 
                    className={activeLink === '/pricing' ? 'active' : ''}
                    onClick={() => handleLinkClick('/pricing')}
                >
                    pricing
                </a>
                <a 
                    href="/api" 
                    className={activeLink === '/api' ? 'active' : ''}
                    onClick={() => handleLinkClick('/api')}
                >
                    Get Started
                </a>
                <a 
                    href="/signIn" 
                    className={activeLink === '/signIn' ? 'active' : ''}
                    onClick={() => handleLinkClick('/signIn')}
                >
                    Sign In
                </a>
            </div>
        </div>
    );
};

export default Nav;

