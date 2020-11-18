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

