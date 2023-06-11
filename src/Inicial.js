import React from 'react';
import './Geral.css';

const Inicial = ({ handlePageChange, values }) => {
  const valorTotalPagar = values.reduce((total, value) => total + parseFloat(value.aPagar || 0), 0);
  const valorTotalReceber = values.reduce((total, value) => total + parseFloat(value.aReceber || 0), 0);
  const diferenca = valorTotalReceber - valorTotalPagar;

  return (
    <div className="geral-container">
      <h2>Página Inicial</h2>
      <p>Valor Total a Pagar: R$ {valorTotalPagar}</p>
      <p>Valor Total a Receber: R$ {valorTotalReceber}</p>
      <p>Diferença: R$ {diferenca}</p>
      <button onClick={() => handlePageChange('Login')}>Acessar Página de Login</button>
      <button onClick={() => handlePageChange('Cadastro')}>Acessar Página de Cadastro</button>
      <button onClick={() => handlePageChange('Crud')}>Acessar Página do CRUD</button>
    </div>
  );
};

export default Inicial;