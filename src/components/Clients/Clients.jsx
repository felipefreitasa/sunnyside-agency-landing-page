import React from 'react'
import ClientCard from '../ClientCard/ClientCard'
import Client1 from '../../assets/images/image-emily.jpg'
import Client2 from '../../assets/images/image-jennie.jpg'
import Client3 from '../../assets/images/image-thomas.jpg'
import './Clients.scss'

const Clients = () => {
   return (
      <div className="clients">
         <h3 data-aos="fade-right">CLIENT TESTIMONIALS</h3>
         <div >
            <ClientCard  ClientImage={Client1} ClientName={'Emily R.'} />
            <ClientCard  ClientImage={Client2} ClientName={'Thomas S.'}/>
            <ClientCard  ClientImage={Client3} ClientName={'Emily R.'} />
         </div>

      </div>
   )
}

export default Clients
