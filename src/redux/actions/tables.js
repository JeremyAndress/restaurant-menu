export const WAIT_TABLE = "WAIT_TABLE"
export function wait_table(){
    return {
        type: WAIT_TABLE,
        payload: null
    }
}

export const SUCCESS_TABLE = "SUCCESS_TABLE"
export function loading_tables(data){
    return {
        type:SUCCESS_TABLE,
        payload:data
    }
}

export const ERROR_TABLE = "ERROR_TABLE"
export function error_tables(){
    return {
        type:ERROR_TABLE,
        payload:null
    }
}