import React from 'react';
import PropTypes from 'prop-types';

const Nabvar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
};

Nabvar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Nabvar;
