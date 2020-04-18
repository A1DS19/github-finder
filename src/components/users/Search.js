import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { Clear, users, SearchUsers } = GithubContext;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      SearchUsers(text);
      setText('');
    } else {
      setAlert('Escribir algo para buscar', 'danger');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          value={text}
          onChange={onChange}
          name='text'
          placeholder='Buscar Usuario'
        ></input>
        <input
          className='btn btn-dark btn-block'
          type='submit'
          value='Buscar'
        ></input>
      </form>
      {users.length > 0 && (
        <button className='btn btn-danger btn-block' onClick={Clear}>
          Limpiar
        </button>
      )}
    </div>
  );
};

export default Search;
