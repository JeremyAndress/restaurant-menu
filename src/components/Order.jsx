import React from 'react';

const Order = ({cart}) => {
    return (
        <>
        <h1 className="font-uber-move-medium">Tu pedido</h1>
        <div className="overflow-auto order-list pt-3">
        {cart.map(ct =>(
            <div key={ct.id}>
            <p ><strong>{ct.name}</strong> precio {ct.price}</p>
            <p>Cantidad: {ct.count}</p>
            <hr/>
            </div>
        ))}
        </div>

        <div className="footer-cabron">
        <button type="button" className="btn btn-success btn-lg btn-block">Realizar Pedido</button>
        </div>
        </>
    )
}
export default Order;