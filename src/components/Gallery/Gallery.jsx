import React from 'react'
import './Gallery.scss'
import ImageGallery1 from '../../assets/images/image-gallery-cone.jpg'
import ImageGallery2 from '../../assets/images/image-gallery-milkbottles.jpg'
import ImageGallery3 from '../../assets/images/image-gallery-orange.jpg'
import ImageGallery4 from '../../assets/images/image-gallery-sugarcubes.jpg'

const Gallery = () => {
   return (
      <div className="gallery">
         <img data-aos="flip-right" src={ImageGallery1} alt="Gallery 1" />
         <img data-aos="flip-right" src={ImageGallery3} alt="Gallery 3" />
         <img data-aos="flip-right" src={ImageGallery2} alt="Gallery 2" />
         <img data-aos="flip-right" src={ImageGallery4} alt="Gallery 4" />
      </div>
   )
}

export default Gallery
