import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Portada.css';


const Portada = ({ imageUrl }) => {
  return (
    
    <div style={{ height: '600px', overflow: 'hidden' }}>
    <div>
      <div className="portada">
      <div className='textos'>
          <h5 className='reconquista'>Un blog católico</h5>
          <p className='sitio'>Ver mas publicaciones</p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Fra%27_Angelico_-_Incoronazione_della_Vergine_-_Google_Art_Project.jpg" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
        
      </div>
    </div>
   
  </div>
  
  );
};

export default Portada;
