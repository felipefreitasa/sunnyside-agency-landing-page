import React from 'react'
import './Footer.scss'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Twitter from '../../assets/icons/icon-twitter.svg'
import Pinterest from '../../assets/icons/icon-pinterest.svg'

const Footer = () => {
   return (
      <div className="footer">
         <h2 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">sunnyside</h2>
         <nav>
            <ul>
               <li data-aos="fade-right">About</li>
               <li data-aos="fade-right">Services</li>
               <li data-aos="fade-right">Projects</li>
            </ul>
         </nav>
         <nav>
            <ul>
               <li data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"><img src={Facebook} alt="Facebook"/></li>
               <li data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"><img src={Instagram} alt="Instagram"/></li>
               <li data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"><img src={Twitter} alt="Twitter"/></li>
               <li data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"><img src={Pinterest} alt="Pinterest"/></li>
            </ul>
         </nav>
      </div>
   )
}

export default Footer
