import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portada from './Portada';
import CardNoticia from './CardNoticia';
import './styles/Inicio.css';
import './Donar';
import './QuienesSomos';
function Inicio() {
    return(
     
        <div><Portada imageUrl={"https://upload.wikimedia.org/wikipedia/commons/1/14/Fra%27_Angelico_-_Incoronazione_della_Vergine_-_Google_Art_Project.jpg"}/>
        <h1 className="titulo">Publicaciones</h1>
        <CardNoticia/>
        </div>
        
    );
};

export default Inicio;