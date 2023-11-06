import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const NoticiaCuerpo = ({ title, description, imageUrl, isAdmin }) => {
  return (
    <div className="card mb-3">
      <img
        src="https://images.freeimages.com/images/large-previews/d21/nature-1370391.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default NoticiaCuerpo;
