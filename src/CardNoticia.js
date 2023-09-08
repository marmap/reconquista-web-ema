import React from 'react';
import './styles/CardNoticia.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CardNoticia = ({ titleN, description,  imageUrl, isAdmin }) => {
  if(isAdmin){
    return (
      <div>
    <div class="caja2">  
    <img src="https://images.freeimages.com/images/large-previews/d21/nature-1370391.jpg" class="img-thumbnail" alt=""/>
        
          <div className='caja'>         
          <a className='titleN'>Card title</a>
          <p className='description'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className='time'>Last updated 3 mins ago</p>
          <div className="caja3">
        <div className="botones">
          <div  className='read-button'>
          <Link to='./NoticiaCuerpo.js'>Leer</Link>
          </div>
          </div>
        </div>       
          </div>
         </div>   
      </div>
    );
  }
  return ( 
  <div>
  <div class="caja2">  
  <img src="https://images.freeimages.com/images/large-previews/d21/nature-1370391.jpg" class="img-thumbnail" alt=""/>
        <div className='caja'>   
        <h5 className='titleN'>Card title</h5>
        <p className='description'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className='time'>Last updated 3 mins ago</p>
        <div className="caja3">
      <div className="botones">
        <div  className='read-button'>Leer</div>
        <div  className='edit-button'>Editar</div>
        </div>
      </div>
      </div>
     </div> 
     </div>
   
  );
}
export default CardNoticia;



  