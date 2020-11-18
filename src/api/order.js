import {instance} from './index';

export function create_order(data,wait,load,error) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const res = await instance.post('orders/orders_create_ocd/',data)
            const response_data = res.data
            console.group(response_data);
            dispatch(load(response_data.id_rs));
        }catch(err){
            dispatch(error());
            console.error(err);
        }
    }
}

export function get_order(order_id,wait,load,error) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const params = { 
                params: { id : order_id} ,
            }
            const res = await instance.get('orders/get_order_info/',params)
            const response_data = res.data
            console.group(response_data);
            dispatch(load(response_data.status));
        }catch(err){
            dispatch(error());
            console.error(err);
        }
    }
}