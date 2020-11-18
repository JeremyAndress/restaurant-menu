import {instance} from './index';

export function get_tables(wait,load,error) {
    return async dispatch =>{
        try{
            dispatch(wait());
            const params = { 
                params: { page : 1} ,
            }
            console.log(params)
            const res = await instance.get('tables/get_all_tables/',params)
            const data = res.data
            console.group(data);
            dispatch(load(data.data));
        }catch(err){
            dispatch(error());
            console.error(err);
        }
    }
}