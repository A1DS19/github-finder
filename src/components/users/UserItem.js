import React from 'react';

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar_url'
        className='round-img'
        style={{ width: '60px' }}
      ></img>
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm'>
          Mas Sobre {login}!
        </a>
      </div>
    </div>
  );
};
export default UserItem;