import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm'>
          Mas Sobre {login}!
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
