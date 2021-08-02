import React from 'react'
import './Stand.scss'
import StandImage from '../../assets/images/image-stand-out.jpg'

const Stand = () => {
   return (
      <div className="stand">
         <img data-aos="flip-right" src={StandImage} alt="Stand img" />

         <div >
            <h2 data-aos="fade-right">Stand out to the right audience</h2>
            <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi magni quaerat blanditiis tempore voluptate libero sint officia optio itaque nam, unde corrupti sapiente culpa voluptates fugit maxime distinctio quo.</p>
            <strong data-aos="fade-right">Learn more</strong>
         </div>
      </div>
   )
}

export default Stand
