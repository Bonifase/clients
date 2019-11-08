import { TOGGLE_FILTER, SEARCH, CLEAR_SERACH } from '../types';

export default (state, {type, payload}) => {
    switch(type){
        case SEARCH:
            const reg = new RegExp(`${payload}`, 'gi');
            return {
                ...state,
                search: state.clients.filter(client => client.name.match(reg))
            }
        case CLEAR_SERACH:
            return {
                ...state,
                search: null
            }
        case TOGGLE_FILTER:
            return {
                ...state,
                filterClient: !state.filterClient
            }
        default: return state
    }
}