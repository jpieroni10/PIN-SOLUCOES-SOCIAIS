import React, { useState } from 'react';
import './Geral.css';

const Login = ({ handlePageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="geral-container">
      <h2>Página de Login</h2>
      <div className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />

        <button onClick={handleLogin}>Entrar</button>
      </div>
      <button onClick={() => handlePageChange('Inicial')}>Voltar para a Página Inicial</button>
    </div>
  );
};

export default Login;