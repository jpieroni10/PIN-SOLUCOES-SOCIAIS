import React, { useState } from 'react';
import './Geral.css';

const Cadastro = ({ handlePageChange }) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEnderecoChange = (e) => {
    setEndereco(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Email:', email);
    console.log('Senha:', senha);
    
    setNome('');
    setEndereco('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className="geral-container">
      <h2>Página de Cadastro</h2>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" value={endereco} onChange={handleEnderecoChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" value={senha} onChange={handleSenhaChange} />
        </div>
        <button type="button" onClick={handleCadastro}>Cadastrar</button>
      </form>
      <button onClick={() => handlePageChange('Inicial')}>Voltar para a Página Inicial</button>
    </div>
  );
};

export default Cadastro;