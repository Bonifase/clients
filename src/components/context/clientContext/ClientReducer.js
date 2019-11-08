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

export default (state, {type, payload}) => {
    switch(type){
        case ADD_CLIENT:
            return{
                ...state,
                clients: [...state.clients, payload]
            }
        case REMOVE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(
                    client => client.id !== payload)
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map(client => client.id === payload.id ? payload : client)
            }
            case EDIT_CLIENT:
                return {
                    ...state,
                    editable: payload
                }
            case CLEAR_EDIT:
                return {
                    ...state,
                    editable: null
                }
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