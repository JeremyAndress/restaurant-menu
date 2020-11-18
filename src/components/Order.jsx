import React,{useState,useEffect} from 'react';

const Order = ({cart}) => {
    const [total,SetTotal] = useState(0);
    useEffect(()=>{
        const total = cart.reduce((acc,current)=>{
            const val = current.count * current.price
            return acc + val
        },0)
        SetTotal(total)
    },[cart])
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
        <div><p>Total: <strong>${total}</strong></p></div>
        <button type="button" className="btn btn-success btn-lg btn-block">Realizar Pedido</button>
        </div>
        </>
    )
}
export default Order;