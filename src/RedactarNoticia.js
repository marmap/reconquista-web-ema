import React from 'react';
import './styles/RedactarNoticia.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const RedactarNoticia = () => {
  
  return (
    <div className="my-component">
      <div className="title">Escribe un título</div>
      <input className="content-box" type="text" class="form-control" placeholder="Titulo" ></input>
      <div className="subtitle">Escribe un resumen</div>
      <input className="content-box" type="text" class="form-control" placeholder="Resumen"></input>
      <div className="subtitle">Radacta la noticia</div>
      <input className="content-box" type="text" class="form-control" placeholder="Noticia..."></input>
      <div className="subtitle">Agrega una imagen</div>
      <div className="image-container"></div>
      <div className="button-container">
        <div className="button-box" id="myButton" onclick="changeCursor()">
          <div className="button-text">Publicar</div>
        </div>
      </div>
    </div>
  );
};

export default RedactarNoticia;
