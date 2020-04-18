import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h1 className='text-danger'>Pagina no encontrada</h1>
      <p>La pagina que busca no existe...</p>
      <Link to='/'>Regresar a pagina pricipal!</Link>
    </div>
  );
};

export default NotFound;
