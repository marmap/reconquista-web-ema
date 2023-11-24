import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/CardNoticia.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

const URI = 'http:://localhost:8000/blogs/';
const CardNoticia = () => {
  const [blogs, setBlogs] = useState([{ id: 1 }]);
  



  useEffect(() => {
    axios.get(`/blogs`) // Utiliza Axios para hacer la petición
      .then(response => setBlogs([response.data]))
      .catch(error => console.error('Error:', error));
  },);
  
  return (
    <div>
   
      <div>
        {noticias.map(blog => (
          <div className="caja2" key={id}>
            <img src={blogs.foto_url} className="img-thumbnail" alt="" />
            <div className="caja">
              <h5 className="titleN">{blogs.titulo}</h5>
              <p className="description">{blogs.resumen}</p>
              <p className="time">{blogs.createdAt}</p>
              <div className="caja3">
                <div className="botones">
                  <Link
                    className="read-button"
                    to={`/noticia/${blogs.id}`}
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

