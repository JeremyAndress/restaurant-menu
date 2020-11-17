import {instance} from './index';

export function get_tables(food_id,ChangeStock) {
    return async dispatch =>{
        try{
            const params = { 
                params: { food : food_id} ,
            }
            console.log(params)
            const res = await instance.get('tables/get_all_tables/',params)
            const data = res.data
            console.group(data);
            ChangeStock(data.stock || 0);
        }catch(err){
            console.error(err);
            ChangeStock(0);
        }
    }
}