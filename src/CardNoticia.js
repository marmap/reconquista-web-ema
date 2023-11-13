import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/CardNoticia.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

const CardNoticia = () => {
  const [noticias, setNoticias] = useState([{ id: 1 }]);
  const [manualId, setManualId] = useState('1');

  // Agrega la función para manejar los cambios en el ID manual
  const handleManualIdChange = (e) => {
    setManualId(e.target.value);
  };

  useEffect(() => {
    axios.get(`/noticias/${manualId}`) // Utiliza Axios para hacer la petición
      .then(response => setNoticias([response.data]))
      .catch(error => console.error('Error:', error));
  }, [manualId]);
  
  return (
    <div>
      <div>
        <label htmlFor="manualId">ID Manual: </label>
        <input
          type="text"
          id="manualId"
          value={manualId}
          onChange={handleManualIdChange}
        />
      </div>
      <div>
        {noticias.map(noticia => (
          <div className="caja2" key={noticia.id}>
            <img src={noticia.foto_url} className="img-thumbnail" alt="" />
            <div className="caja">
              <h5 className="titleN">{noticia.titulo}</h5>
              <p className="description">{noticia.resumen}</p>
              <p className="time">{noticia.fecha_publicacion}</p>
              <div className="caja3">
                <div className="botones">
                  <Link
                    className="read-button"
                    to={`/noticia/${noticia.id}`}
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      width: '50px',
                      height: '80px',
                      position: 'relative',
                      top: '-10px',
                      left: '130px',
                      borderRadius: '2px',
                      fontSize: '20px',
                      boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
                      fontFamily: 'Montaga',
                      padding: '5px 22px',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Leer
                  </Link>
                  <Link
                    className="edit-button"
                    style={{
                      background: '#8E0303',
                      width: '90px',
                      height: '30px',
                      color: 'white',
                      borderRadius: '2px',
                      fontSize: '20px',
                      position: 'relative',
                      top: '-10px',
                      left: '150px',
                      boxShadow: '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',
                      textDecoration: 'none',
                      fontFamily: 'Montaga',
                      padding: '5px 22px',
                      ':hover': { backgroundColor: 'red' },
                    }}
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNoticia;

