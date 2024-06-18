import React from 'react'
import items from '../../data/footer-data';

export default function Footer() {
  return (
    <footer>
          <div className='split'>
        <div className="footerLogoText">
            <h1> Digifunzi</h1>
        </div >
        <div className='footerList' >
          <div className='split'>
        {items.map(item => {
          return(
            <div key={item.id} className='footerListItem'>
              <h3 className='textSubTitle'>{item.name}</h3>
              {item.meta.map(data => {
                return (
                  <p className='footerListItem' key={data.length}> {data}</p>
                )
              })}
            </div>
          )
        })}
        </div>
        </div>
        </div>
        
        <div className="copyright">
            <div className='copyright-logo'>
              <h1> &copy; 2024 Digifunzi</h1>
            </div>
            <div className='copyright-links'>
              <p>&copy;</p>
              <p>&copy;</p>
              <p>&copy;</p>
            </div>
        </div>
    </footer>
  )
}
