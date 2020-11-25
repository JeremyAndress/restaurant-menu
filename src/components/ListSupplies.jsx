import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {get_food_plate} from '../api/food_plate';
import {success_plate,loading_plate,error_plate} from '../redux/actions/plate';
import Supplies from './Supplies';
import Spinner from '../components/Spinner';

const ListSupplies = ({add,remove}) =>{
    const dispatch = useDispatch()
    const plates = useSelector(store => store.plates)

    useEffect(()=>{
        dispatch(get_food_plate(
            loading_plate, success_plate,
            error_plate
        ))
    },[dispatch])
    
    return (
        <div>
            {
            plates.pending ? 
            <Spinner/> : 
                plates.data.map(sp => (
                <Supplies key={sp.id} sp={sp} add={add} remove={remove}/>
            ))}
        </div>
    )
}
export default ListSupplies;