import React from 'react';

function Alert({ alert }) {
  return alert !== null ? (
    <div className={`alert bg-${alert.type}`}>
      <p>
        <i className='fas fa-exclamation'></i>
        {alert.msg}
      </p>
    </div>
  ) : null;
}

export default Alert;
