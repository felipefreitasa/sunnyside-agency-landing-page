import React from 'react'
import './Graphic.scss'
import GraphicImage1 from '../../assets/images/image-graphic-design.jpg'
import GraphicImage2 from '../../assets/images/image-photography.jpg'

const Graphic = () => {
   return (
      <div className="graphic">
         <div data-aos="flip-right" className="graphic1">
            <img src={GraphicImage1} alt="Graphic Design img" />
            <div data-aos="fade-right">
               <h2>Graphic Design</h2>
               <p>similique ducimus numquam ut incidunt cum iste. Ipsa, voluptatum deserunt minus dignissimos temporibus aliquam eius?</p>
            </div>
         </div>
         <div data-aos="flip-right" className="graphic2">
            <img src={GraphicImage2} alt="Photography img" />
            <div data-aos="fade-right">
               <h2>Photography</h2>
               <p> similique ducimus numquam ut incidunt cum iste. Ipsa, voluptatum deserunt minus dignissimos temporibus aliquam eius?</p>
            </div>
         </div>
      </div>
   )
}

export default Graphic
