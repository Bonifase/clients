import React, { useContext } from 'react'
import Client from './Client';
import ClientContext from '../context/clientContext/ClientContex';

const Clients = () => {
  const {clients, filterClient, search } = useContext(ClientContext);
  return (
    <div className="guests">
      {search !== null ? search.map(client => <Client key={client.id} client={client} />) :
        clients.filter(client => !filterClient || client.isconfirmed).map(client => <Client key={client.id} client={client} />)}
    </div>
  )
}

export default Clients;
