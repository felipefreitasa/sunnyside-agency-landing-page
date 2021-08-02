import React from 'react'
import './Banner.scss'
import BannerImage from '../../assets/images/image-header.jpg'
import ArrowDown from '../../assets/icons/icon-arrow-down.svg'

const Banner = () => {
   return (
      <div className="banner">
         <h1>WE ARE CREATIVES</h1>
         <a href="#transform"><img className="banner-arrow" src={ArrowDown} alt="Arrow Down" /></a>
         <img className="banner-img" src={BannerImage} alt="Banner Img" />
      </div>
   )
}

export default Banner
