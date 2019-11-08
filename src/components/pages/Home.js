import React from 'react'
import ClientForm from '../clients/ClientForm';
import ClientCounter from '../clients/ClientCounter';
import ClientFilter from '../clients/ClientFilter';
import SearchClient from '../clients/SearchClient';
import Clients from '../clients/Clients';

const Home = () => {
  return (
    <div className="app-container">
        <div className="main">
            <div className="filter">
                <ClientFilter/>
                <SearchClient/>
            </div>
            <ClientForm/>
            <ClientCounter/>
        </div>
        <Clients/>
    </div>
  )
}


export default Home;

