import {instance} from './index';

export function get_stock(food_id,ChangeStock) {
    return async dispatch =>{
        try{
            const params = { 
                params: { food : food_id} ,
            }
            console.log(params)
            const res = await instance.get('food_plates/get_stock/',params)
            const data = res.data
            console.group(data);
            ChangeStock(data.stock || 0);
        }catch(err){
            console.error(err);
            ChangeStock(0);
        }
    }
}

export function get_food_plate(wait,load,error) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const res = await instance.get('food_plates/get_all_food_plates_wjwt/')
            const data = res.data
            console.group(data);
            dispatch(load(data));
        }catch(err){
            console.error(err);
            dispatch(error());
        }
    }
}


