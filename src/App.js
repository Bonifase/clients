import React from 'react';
import NavigationBar from './components/layouts/NavigationBar';
import Home from './components/pages/Home';
import ClientState from './components/context/clientContext/ClientState';


function App() {
  return (
    <ClientState>
      <div >
        <NavigationBar/>
        <Home/>
        
      </div>
    </ClientState>
  );
}

export default App;
