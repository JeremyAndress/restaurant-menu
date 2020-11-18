import {
    ERROR_ORDER,CREATE_ORDER,
    SUCCESS_ORDER,UPDATE_ORDER
} from '../actions/order';

const default_order = {
    id: localStorage.getItem('order'),
    status: null,
    pending: false,
    error: false
};

const order = (state = default_order,action) =>{
    switch(action.type){
        case SUCCESS_ORDER: {
            localStorage.setItem('order',action.payload);
            return {
                ...state,
                id: action.payload,
                pending: false
            }
        }
        case CREATE_ORDER: {
            return {
                ...state,
                pending: true
            }
        }
        case UPDATE_ORDER:{
            return {
                ...state,
                status: action.payload,
                pending: false
            }
        }
        case ERROR_ORDER: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default order;
