import './styles/CardNoticia.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

const CardNoticia = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('/noticias')
      .then(response => response.json())
      .then(data => setNoticias(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {noticias.map(noticia => (
        <div className="caja2" key={noticia.id}>
          <img
            src={noticia.imageUrl} // Debes tener imageUrl en tu objeto de noticia
            className="img-thumbnail"
            alt=""
          />
          <div className="caja">
            <h5 className="titleN">{noticias.titulo}</h5>
            <p className="description">{noticias.resumen}</p>
            <p className="time">{noticias.fecha_publicacion}</p>
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
                  <a>Leer</a>
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
  );
};

export default CardNoticia;