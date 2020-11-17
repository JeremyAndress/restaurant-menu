import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {get_stock} from '../api/food_plate';

const Supplies = ({sp,add,remove}) =>{
    const dispatch = useDispatch();
    const [stock,SetStock] = useState(0);

    const ChangeStock = (stock) => {
        console.log(`stock inside ${stock}`)
        SetStock(stock);
    }
    useEffect(()=>{
        dispatch(get_stock(sp.id,ChangeStock))
    },[dispatch,sp.id])

    return (
        <>
        <p className="h6">{sp.name}</p>
        <p className="mt-n1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div className="d-flex mt-n1">
            <p><strong>${sp.price}</strong></p>
            <div className="ml-auto">
                <p>stock: {stock}</p>
                <button onClick={() => add(sp.id,stock)}>+</button>
                <button onClick={() => remove(sp.id)}>-</button>
            </div>
        </div>
        <hr className="mt-n1"/>
        </>
    )
}
export default Supplies;