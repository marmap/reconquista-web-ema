import React, { useState } from 'react';
import './styles/RedactarNoticia.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const RedactarNoticia = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    resumen: '',
    cuerpo: '', // Este campo debe llamarse noticia en lugar de cuerpo
    foto_url: '', // Agrega más campos si es necesario
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/crearNoticia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="my-component">
      <form onSubmit={handleSubmit}>
        <div className="title">Escribe un título</div>
        <input 
          className="content-box" 
          type="text" 
          name="titulo"
          value={formData.titulo}
          onChange={handleInputChange}
          placeholder="Titulo" 
        />
        <div className="subtitle">Escribe un resumen</div>
        <input 
          className="content-box" 
          type="text" 
          name="resumen"
          value={formData.resumen}
          onChange={handleInputChange}
          placeholder="Resumen"
        />
        <div className="subtitle">Redacta la noticia</div>
        <input 
          className="content-box" 
          type="text" 
          name="noticia"
          value={formData.noticia}
          onChange={handleInputChange}
          placeholder="Noticia..."
        />
        <div className="subtitle">Agrega una imagen</div>
        <input 
          className="content-box" 
          type="text" 
          name="foto_url"
          value={formData.foto_url}
          onChange={handleInputChange}
          placeholder="URL de la imagen"
        />
        <div className="button-container">
          <button type="submit" className="button-box" id="myButton">
            <div className="button-text">Publicar</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RedactarNoticia;

