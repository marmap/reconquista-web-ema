import React from 'react';
import './styles/Navbar.css';
import {BrowserRouter, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({isAdmin}) => {
  if(isAdmin){
 return(
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          className="imageLogo" 
          src="https://i0.wp.com/www.corazonessagrados.com/wp-content/uploads/2022/07/Copia-de-ganz-H-scaled.jpg?w=640&ssl=1"
          alt=""
        />
        <Link className="navbar-brand active text-white " to="/"><h1>Reconquista</h1></Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">
                Cerrar sesión
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </BrowserRouter>
  );
  }


  return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <img
        className="imageLogo" 
        src="https://i0.wp.com/www.corazonessagrados.com/wp-content/uploads/2022/07/Copia-de-ganz-H-scaled.jpg?w=640&ssl=1"
        alt=""
      />
      <Link className="navbar-brand active text-white " href="#"><h1>Reconquista</h1></Link>
      <p className="lema">"Sapientia foris prædicat in plateis dat vocem suam" (1 Prov 20)</p>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="./QuienesSomos">
              Quienes somos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="./Donar">
              Donar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
};

export default Navbar;