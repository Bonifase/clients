import React, { useReducer } from 'react';
import ClientContext from './ClientContex';
import ClientReducer from './ClientReducer';
import { TOGGLE_FILTER, SEARCH, CLEAR_SERACH } from '../types';
import data from '../../clients/data';

const ClientState = (props) => {
    const initialState = {
        filterClient: false,
        search: null,
        clients: data()
    }
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
  return (
    <ClientContext.Provider value={{
        clients: state.clients,
        filterClient: state.filterClient,
        search: state.search,
        toggleFilter,
        searchClient,
        clearSearch
    }}>{props.children}</ClientContext.Provider>
  )
}

export default ClientState
