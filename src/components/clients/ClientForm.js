import React, { useState , useContext, useEffect } from 'react';
import ClientContext from '../context/clientContext/ClientContex';

const ClientForm = () => {

  const { addClient, editable, updateClient, clearEdit } = useContext(ClientContext);

  useEffect(() => {
    if(editable !== null){
      setClient(editable)
    }else{
      setClient({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
  }, [editable]);
  
  const [client, setClient] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg"
  });
 
  const {name, phone, dietary} = client;

  const handleChange = e => {
    setClient({
      ...client,
      [e.target.name] : e.target.value
    })
  };

  const onSubmit = e => {
    e.preventDefault();
    if(editable !== null){
      updateClient(client);
      clearEdit()
    }else{
      addClient(client);
      setClient({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
    
  };

  return (
    <div className="invite-section">
      <h1>{editable !== null ? "Edit Atendee": "Invite Atendee"}</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name}
          onChange={handleChange} 
        />
        <input 
          type="text" 
          placeholder="Phone" 
          name="phone" 
          value={phone}
          onChange={handleChange} 
         />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
          <input 
            type="radio" 
            name="dietary" 
            value='Non-Veg'
            checked={dietary === "Non-Veg"}
            onChange={handleChange} 
          />
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
          <input 
            type="radio" 
            name="dietary"
            value='Vegan'
            checked={dietary === "Vegan"}
            onChange={handleChange} 
          />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pascatarian
          <input 
            type="radio" 
            name="dietary" 
            value='Pasacatarian' 
            checked={dietary === "Pasacatarian"}
            onChange={handleChange} 
          />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editable !== null ? "Update Atendee": "Invite Atendee"} className="btn" />
        {editable !== null ? <input type="button" value="Cancel" onClick={clearEdit} className="btn clear"/> : null}
      </form>
    </div>
  )
}

export default ClientForm;
