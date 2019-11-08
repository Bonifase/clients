import React, { useContext } from 'react';
import ClientContext from '../context/clientContext/ClientContex';

const ClientFilter = () => {
  const { toggleFilter } = useContext(ClientContext);
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => toggleFilter()} />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  )
}

export default ClientFilter;
