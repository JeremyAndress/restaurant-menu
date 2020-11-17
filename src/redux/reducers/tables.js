import {
    ERROR_TABLE,SUCCESS_TABLE,
    WAIT_TABLE
} from '../actions/tables';

const default_tables = {
    data: [],
    pending: false,
    error: false
};

const tables = (state = default_tables,action) =>{
    switch(action.type){
        case SUCCESS_TABLE: {
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case WAIT_TABLE: {
            return {
                ...state,
                data: [],
                pending: true
            }
        }
        case ERROR_TABLE: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default tables;