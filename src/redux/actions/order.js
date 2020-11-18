export const CREATE_ORDER = 'CREATE_ORDER'
export function create_order(){
    return {
        type:CREATE_ORDER,
        payload:null
    }
}
export const UPDATE_ORDER = 'UPDATE_ORDER'
export function update_order(status){
    return {
        type:UPDATE_ORDER,
        payload:status
    }
}
export const SUCCESS_ORDER = 'SUCCESS_ORDER'
export function success_order(id){
    return {
        type: SUCCESS_ORDER,
        payload:id
    }
}
export const ERROR_ORDER = 'ERROR_ORDER'
export function error_order(){
    return{
        type:ERROR_ORDER,
        payload:null
    }
}