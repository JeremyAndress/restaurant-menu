import React from 'react';
import data from '../api/food_plate.json';

const ListSupplies = ({add,remove}) =>{
    const spl = data.data
    return (
        <div>
            {spl.map(sp => (
                <>
                <p className="h6">{sp.name}</p>
                <p className="mt-n1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div class="d-flex mt-n1">
                    <p><strong>${sp.price}</strong></p>
                    <div class="ml-auto">
                        <button onClick={() => add(sp.id)}>+</button>
                        <button onClick={() => remove(sp.id)}>-</button>
                    </div>
                </div>
                <hr className="mt-n1"/>
                </>
            ))}
        </div>
    )
}
export default ListSupplies;