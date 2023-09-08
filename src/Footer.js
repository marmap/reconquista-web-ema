import React from 'react';
import './styles/Footer.css'; 


const Footer = ({ isAdmin = true }) => {
  return (
    <div className="footer-container">
      <div className='logoF'>Reconquista</div>
      <div className='botonN'>Publicaciones</div>
      {isAdmin ? (
        <div className='botonD'>Abrir sesión</div>
      ) : (
        <div className='botonD'>Cerrar sesión</div>
      )}
      <div className='año'>© Reconquista, Inc. 2023. Noticias católicas</div>
    </div>
  );
} 

export default Footer;

