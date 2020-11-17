import React from 'react';
import Button from 'react-bootstrap/Button'

const Order = ({cart}) => {
    return (
        <>
        <h1>Orden</h1>
        {cart.map(ct =>(
            <>
            <p key={ct.id}>{ct.id} - count {ct.count}</p>
            </>
        ))}
        <Button variant="primary" size="lg" block>Block level button </Button>
        </>
    )
}
export default Order;