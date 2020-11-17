import React from 'react';
import Supplies from './Supplies';
import data from '../api/food_plate.json';

const ListSupplies = ({add,remove}) =>{
    const spl = data.data
    return (
        <div>
            {spl.map(sp => (
                <Supplies key={sp.id} sp={sp} add={add} remove={remove}/>
            ))}
        </div>
    )
}
export default ListSupplies;