import React from 'react';
import { createRoot } from 'react-dom';
import './styles/index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Si deseas comenzar a medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un punto de análisis. Obtén más información: https://bit.ly/CRA-vitals
