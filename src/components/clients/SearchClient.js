import React, { useContext, useRef } from 'react';
import ClientContext from '../context/clientContext/ClientContex';

const SearchClient = () => {
  const { searchClient, clearSearch } = useContext(ClientContext);
  const searchValue = useRef('')
  const handleChange = (e) => {
    if(searchValue.current.value !== ""){
      searchClient(e.target.value);
    }else{
      clearSearch()
    }

  }
  return (
    <div>
      <input 
        ref={searchValue} 
        onChange={handleChange}
        type="text" 
        className="search" 
        placeholder=" Search Client by name ..."
       />
      <i className="fas fa-search search-icon" />
    </div>
  )
}

export default SearchClient;
