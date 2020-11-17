import React from 'react';

const Order = ({cart}) => {
    return (
        <>
        <h1>Orden</h1>
        {cart.map(ct =>(
            <>
            <p>{ct.id} - count {ct.count}</p>
            </>
        ))}
        </>
    )
}
export default Order;