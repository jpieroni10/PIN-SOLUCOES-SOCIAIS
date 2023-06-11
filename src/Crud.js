import React, { useState, useEffect } from 'react';

const Crud = ({ handlePageChange, handleCrudValues, values }) => {
  const [debito, setDebito] = useState('');
  const [credito, setCredito] = useState('');
  const [aPagar, setAPagar] = useState('');
  const [aReceber, setAReceber] = useState('');

  const handleDebitoChange = (e) => {
    setDebito(e.target.value);
  };

  const handleCreditoChange = (e) => {
    setCredito(e.target.value);
  };

  const handleAPagarChange = (e) => {
    setAPagar(e.target.value);
  };

  const handleAReceberChange = (e) => {
    setAReceber(e.target.value);
  };

  const handleCreate = () => {
    const newValue = {
      debito,
      credito,
      aPagar,
      aReceber
    };

    const updatedValues = [...values, newValue];
    handleCrudValues(updatedValues);

    // Limpar campos após a criação
    setDebito('');
    setCredito('');
    setAPagar('');
    setAReceber('');
  };

  const handleUpdate = (index) => {
    const updatedValue = {
      debito,
      credito,
      aPagar,
      aReceber
    };

    const updatedValues = [...values];
    updatedValues[index] = updatedValue;
    handleCrudValues(updatedValues);

    // Limpar campos após a atualização
    setDebito('');
    setCredito('');
    setAPagar('');
    setAReceber('');
  };

  const handleDelete = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    handleCrudValues(updatedValues);
  };

  useEffect(() => {
    // Simulando a leitura dos valores do backend
    const fetchValues = async () => {
    };

    fetchValues();
  }, []);

  return (
    <div className="geral-container">
      <h2>Página do CRUD</h2>
      <form>
        <div>
          <label htmlFor="debito">Débito:</label>
          <input type="number" id="debito" value={debito} onChange={handleDebitoChange} />
        </div>
        <div>
          <label htmlFor="credito">Crédito:</label>
          <input type="number" id="credito" value={credito} onChange={handleCreditoChange} />
        </div>
        <div>
          <label htmlFor="apagar">A Pagar:</label>
          <input type="number" id="apagar" value={aPagar} onChange={handleAPagarChange} />
        </div>
        <div>
          <label htmlFor="areceber">A Receber:</label>
          <input type="number" id="areceber" value={aReceber} onChange={handleAReceberChange} />
        </div>
        <button type="button" onClick={handleCreate}>
          Criar
        </button>
      </form>

      <div>
        <h3>Valores:</h3>
        <table>
          <thead>
            <tr>
              <th>Débito</th>
              <th>Crédito</th>
              <th>A Pagar</th>
              <th>A Receber</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => (
              <tr key={index}>
                <td>{value.debito}</td>
                <td>{value.credito}</td>
                <td>{value.aPagar}</td>
                <td>{value.aReceber}</td>
                <td>
                  <button type="button" onClick={() => handleUpdate(index)}>
                    Atualizar
                  </button>
                  <button type="button" onClick={() => handleDelete(index)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={() => handlePageChange('Inicial')}>Voltar para a Página Inicial</button>
    </div>
  );
};

export default Crud;