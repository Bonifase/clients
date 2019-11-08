import React, { useReducer } from 'react';
import ClientContext from './ClientContex';
import ClientReducer from './ClientReducer';
import { 
    TOGGLE_FILTER, 
    SEARCH, 
    CLEAR_SERACH, 
    ADD_CLIENT, 
    REMOVE_CLIENT,
    UPDATE_CLIENT,
    EDIT_CLIENT,
    CLEAR_EDIT
 } from '../types';
import data from '../../clients/data';

const ClientState = (props) => {
    const initialState = {
        filterClient: false,
        search: null,
        editable: null,
        clients: data()
    };

    const [state, dispatch] = useReducer(ClientReducer, initialState);

    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER,
        })
    };

    const searchClient = (client) => {
        dispatch({
            type: SEARCH,
            payload: client
        })
    };

    const clearSearch = () => {
        dispatch({
            type: CLEAR_SERACH,
        })
    };

    // add client 
    const addClient = client => {
        client.id = Date.now();
        client.isconfirmed = false;
        dispatch({
            type: ADD_CLIENT,
            payload: client
        })
    };

    // remove client 
    const removeClient = (id) => {
        dispatch({
            type: REMOVE_CLIENT,
            payload: id
        })
    };

    // update
    const updateClient = (client) => {
        dispatch({
            type: UPDATE_CLIENT,
            payload: client
        })
    };

    // Edit client
    const editClient = (client) => {
        dispatch({
            type: EDIT_CLIENT,
            payload: client
        })
    };

    // Clear edit
    const clearEdit = () => {
        dispatch({
            type: CLEAR_EDIT
        })
    };

  return (
    <ClientContext.Provider value={{
        clients: state.clients,
        filterClient: state.filterClient,
        search: state.search,
        editable: state.editable,
        toggleFilter,
        searchClient,
        clearSearch,
        addClient,
        removeClient,
        updateClient,
        editClient,
        clearEdit
    }}>{props.children}</ClientContext.Provider>
  )
}

export default ClientState
