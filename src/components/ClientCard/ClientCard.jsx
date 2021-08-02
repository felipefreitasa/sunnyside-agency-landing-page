import React from 'react'
import './ClientCard.scss'

const ClientCard = ({ ClientImage, ClientName, ClientJob }) => {
   return (
      <div data-aos="fade-right" className="client-card">
         <img src={ClientImage} alt="Client Profile" />
         <p>Rem illo sapiente, architecto distinctio, nemo unde similique dolor? Vero incidunt sit maiores maxime dolorem.</p>
         <h4>{ClientName}</h4>
      </div>
   )
}

export default ClientCard
