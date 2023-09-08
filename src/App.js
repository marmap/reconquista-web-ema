import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Footer from './Footer';
import Donar from './Donar';
import QuienesSomos from './QuienesSomos';
import RedactarNoticia from './RedactarNoticia';



function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Donar" element={<Donar />} />
        <Route path="/RedactarNoticia" element={<RedactarNoticia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;


