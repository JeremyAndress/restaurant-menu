export const FETCH_PLATE_LOADING = 'FETCH_PLATE_LOADING';
export function loading_plate(){
    return {
        type: FETCH_PLATE_LOADING,
        payload: null

    }
}
export const FETCH_PLATE_SUCCESS = 'FETCH_PLATE_SUCCESS';
export function success_plate(data){
    return {
        type: FETCH_PLATE_SUCCESS,
        payload: data
    }
}
export const FETCH_PLATE_ERROR = 'FETCH_PLATE_ERROR';
export function error_plate(){
    return{
        type: FETCH_PLATE_ERROR,
        payload: null
    }
}