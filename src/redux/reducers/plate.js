import {
    FETCH_PLATE_ERROR,FETCH_PLATE_LOADING,
    FETCH_PLATE_SUCCESS
} from '../actions/plate';

const default_plates = {
    data: [],
    pending: false,
    error: false
};

const plates = (state = default_plates,action) =>{
    switch(action.type){
        case FETCH_PLATE_SUCCESS: {
            console.log(action.payload)
            console.log('je')
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case FETCH_PLATE_LOADING: {
            console.log('waitt')
            return {
                ...state,
                data: [],
                pending: true
            }
        }
        case FETCH_PLATE_ERROR: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default plates;