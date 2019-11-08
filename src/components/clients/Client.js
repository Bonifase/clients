import React, { useContext } from 'react';
import ClientContext from '../context/clientContext/ClientContex';

const Client = ({client}) => {
  const { id, name, phone, dietary, isconfirmed } = client;
  const { removeClient, updateClient, editClient } = useContext(ClientContext);
  const handleRemove = () => {
    removeClient(id);
  };

  // toggle invite confirmation
  const handleUpdate = (e) => {
    updateClient({...client, isconfirmed:!isconfirmed})
  };
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isconfirmed && 'confirm'}`}> Confirmed
        <i className={`fas fa-check-square ${isconfirmed && 'confirm'}`}>
              <input type="checkbox" onChange={handleUpdate} />
            </i>
          </label>
        </div>
        <div>
          <button onClick={() => editClient(client)}>
            <i className="fas fa-user-edit"></i>
          </button>
          <button onClick={handleRemove}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span className={
          'badge ' + (dietary === 'Non-Veg' ? 'red': dietary === 'Vegan' ? 'green' : 'seaGreen' )}>{dietary}</span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Client;
