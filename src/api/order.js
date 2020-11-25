import {instance} from './index';

export function create_order(data,wait,load,error,update,clean) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const res = await instance.post('orders/orders_create_ocd/',data)
            const response_data = res.data
            console.group(response_data);
            dispatch(load(response_data.id_rs));
            dispatch(update('Creado'));
            clean();
        }catch(err){
            dispatch(error());
            console.error(err);
        }
    }
}

export function update_order_ocd(data,id,wait,error,update,clean) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const params = { 
                params: { id : id} ,
            }
            const res = await instance.put('orders/orders_update_ocd/',data,params)
            const response_data = res.data
            console.group(response_data);
            dispatch(update('Creado'));
            clean();
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