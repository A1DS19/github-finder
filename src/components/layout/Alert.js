import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
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
