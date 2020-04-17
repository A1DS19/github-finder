import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nabvar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Acerca de esta App</Link>
        </li>
      </ul>
    </nav>
  );
};

Nabvar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Nabvar;
