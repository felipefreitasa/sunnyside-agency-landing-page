import React from 'react'
import './Transform.scss'
import TransformImage from '../../assets/images/image-transform.jpg'

const Transform = () => {
   return (
      <div className="transform" >
         <div>
            <h2 data-aos="fade-right">Transform your brand</h2>
            <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi magni quaerat blanditiis tempore voluptate libero sint officia optio itaque nam, unde corrupti sapiente culpa voluptates fugit maxime distinctio quo.</p>
            <strong data-aos="fade-right">Learn more</strong>
         </div>
         <img id="transform" data-aos="flip-right" src={TransformImage} alt="Transform img" />
      </div>
   )
}

export default Transform
