import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/CardNoticia.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const URI = 'http://localhost:8000/blogs/';

const CardNoticia = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(URI);
          setBlogs(response.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    fetchData();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div className="caja2" key={blog.id}>
          <img src={blog.foto_url} className="img-thumbnail" alt="" />
          <div className="caja">
            <h5 className="titleN">{blog.titulo}</h5>
            <p className="description">{blog.resumen}</p>
            <p className="time">{blog.createdAt}</p>
            <div className="caja3">
              <div className="botones">
                <Link
                  className="read-button"
                  to={`/blogs/${blog.id}`}
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
                  to={`/blogs/edit/${blog.id}`}
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
