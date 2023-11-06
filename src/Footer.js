import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ isAdmin = true }) => {
  return (
    <div className="footer-container">
      <div className='logoF'>Reconquista</div>
      <div className='botonN'>Publicaciones</div>
      {isAdmin ? (
        <Link className='botonD' to='/src/AbrirSesion.js'>Abrir sesión</Link>
      ) : (
        <Link className='botonD' to='./App.js'>Cerrar sesión</Link>
      )}
      <div className='año'>© Reconquista, Inc. 2023. Noticias católicas</div>
    </div>
  );
}

export default Footer;

