// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Donar" element={<Donar />} />
        <Route path="/RedactarNoticia" element={<RedactarNoticia />} />
        <Route path="/noticia/:id" element={<NoticiaIndividual />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AbrirSesion" element={<AbrirSesion />} />
        <Route path="/CardNoticia" element={<CardNoticia />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



