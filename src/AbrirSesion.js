import React, {useState} from 'react';
import './styles/Sesion.css';


function AbrirSesion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return(
    <div className="AbrirSesion">
    <h1>Iniciar Sesión</h1>
    <form onSubmit={handleSubmit}>
    <label>
      Usuario:
      <input type="text" value={username} onChange={handleUsernameChange}/>
    </label>
    <br/>
    <label>
      Contraseña:
      <input type="password" value={password} onChange={handlePasswordChange} />
    </label>
    <button type="submit">Iniciar Sesión</button>
    </form>
    </div>
  );
}



export default AbrirSesion;
