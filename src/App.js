// App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Inicio';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Footer from './Footer';
import Donar from './Donar';
import QuienesSomos from './QuienesSomos';
import RedactarNoticia from './RedactarNoticia';
import NoticiaIndividual from './NoticiaCuerpo';
import AbrirSesion from './AbrirSesion';
import CardNoticia from './CardNoticia';



function App() {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const PrivateRoute = ({ element, ...rest }) => (
    isLoggedIn ? element : <Navigate to="/AbrirSesion" />
  );
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Donar" element={<Donar />} />
        <PrivateRoute path="/RedactarNoticia" element={<RedactarNoticia  />} />
        <Route path="/noticia/:id" element={<NoticiaIndividual />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AbrirSesion" element={<AbrirSesion setLoggedIn={setLoggedIn} />} />
        <Route path="/noticias" element={<CardNoticia  isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;



