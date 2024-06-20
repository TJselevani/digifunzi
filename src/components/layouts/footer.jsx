import React from 'react'
import items from '../../data/footer-data';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {  footerLogo, primaryColor } from '../util/config';

export default function Footer() {
  return (
    <footer style={{backgroundColor: primaryColor}}>
        <div className='split mid' >

          <div className="footerLogoContainer image-crop-container " >
              <img src={footerLogo} style={{objectFit: 'cover'}} className='logo' width={352} height={112} alt="Digifunzi" />
          </div >

          <div className='footerList' >
            <div className='split' style={{marginRight: '100px'}}>
              {items.map(item => (
                <div key={item.id} className='footerListItem'>
                  <h1 className='textSubTitle'>{item.name}</h1>
                  {item.meta.map(data => ( <p className='footerListItem' key={data.length}> {data}</p> ))}
                </div>))}
            </div>
          </div>

        </div>
        
        <div className="copyright mid">
          <div className='split-h'>
            <div className='copyright-logo'>
              <span><p className='split-h'> <h1>&copy;</h1>2024 Digifunzi</p></span>
            </div>
            <div className="split">
              <FaInstagram className='link'/> 
              <FaTwitter className='link'/>
              <FaFacebook className='link'/>
              <FaLinkedin className='link'/>
            </div>
            </div>
        </div>
    </footer>
  )
}
