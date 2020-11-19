import {
    FETCH_DETAIL_ERROR,
    FETCH_DETAIL_LOADING, FETCH_DETAIL_SUCCESS
} from '../actions/detail';

const default_detail = {
    data: [],
    pending: false,
    error: false
};

const detail = (state = default_detail,action) =>{
    switch(action.type){
        case FETCH_DETAIL_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case FETCH_DETAIL_LOADING: {
            return {
                ...state,
                data: [],
                pending: true
            }
        }
        case FETCH_DETAIL_ERROR: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default detail;