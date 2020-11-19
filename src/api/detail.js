import {instance} from './index';
 
export function get_order_detail(id,wait,load,error) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const params = { 
                params: { order_id : id} ,
            }
            console.log(params)
            const res = await instance.get('orders_detail/get_orders_detail_for_order/',params)
            const data = res.data
            console.group(data);
            dispatch(load(data));
        }catch(err){
            dispatch(error());
            console.error(err);
        }
    }
}