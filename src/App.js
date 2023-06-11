// App.js
import React, { useState } from 'react';
import Inicial from './Inicial';
import Login from './Login';
import Cadastro from './Cadastro';
import Crud from './Crud';

const App = () => {
  const [page, setPage] = useState('Inicial');
  const [crudValues, setCrudValues] = useState([]);

  const handlePageChange = (pageName) => {
    setPage(pageName);
  };

  const handleCrudValues = (values) => {
    setCrudValues(values);
  };

  let currentPage;
  if (page === 'Inicial') {
    currentPage = (
      <Inicial handlePageChange={handlePageChange} values={crudValues} />
    );
  } else if (page === 'Login') {
    currentPage = (
      <Login handlePageChange={handlePageChange} />
    );
  } else if (page === 'Cadastro') {
    currentPage = (
      <Cadastro handlePageChange={handlePageChange} />
    );
  } else if (page === 'Crud') {
    currentPage = (
      <Crud
        handlePageChange={handlePageChange}
        handleCrudValues={handleCrudValues}
        values={crudValues}
      />
    );
  }

  return <div>{currentPage}</div>;
};

export default App;