import React from 'react';

const Order = ({cart}) => {
    return (
        <>
        <h1 className="font-uber-move-medium">Tu pedido</h1>
        {cart.map(ct =>(
            <>
            <p key={ct.id}>{ct.id} - count {ct.count}</p>
            </>
        ))}
        
        <div className="footer-cabron">
        <button type="button" class="btn btn-success btn-lg btn-block">Realizar Pedido</button>
        </div>
        </>
    )
}
export default Order;