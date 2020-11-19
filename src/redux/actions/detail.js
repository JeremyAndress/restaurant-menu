export const FETCH_DETAIL_LOADING = 'FETCH_DETAIL_LOADING';
export function loading_detail(){
    return {
        type: FETCH_DETAIL_LOADING,
        payload: null

    }
}
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export function success_detail(data){
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload: data
    }
}
export const FETCH_DETAIL_ERROR = 'FETCH_DETAIL_ERROR';
export function error_detail(){
    return{
        type: FETCH_DETAIL_ERROR,
        payload: null
    }
}