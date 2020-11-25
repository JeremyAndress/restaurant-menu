import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {create_order,update_order_ocd,get_order} from '../api/order';
import Spinner from './Spinner';
import OrderDetail from './OrderDetail';
import {
    success_order, error_order,
    create_order as wait_order, update_order
} from '../redux/actions/order';

const Order = ({cart,clean}) => {
    const dispatch = useDispatch();
    const [total,SetTotal] = useState(0);
    const [show, setShow] = useState(false);
    const order = useSelector(store => store.order);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        const total = cart.reduce((acc,current)=>{
            const val = current.count * current.price
            return acc + val
        },0)
        SetTotal(total)
    },[cart]);

    useEffect(()=>{
        console.log('update status order')
        if(order.id){
            setInterval(() => dispatch(get_order(
                order.id,wait_order,
                update_order, error_order
            )),10000)
        }            
    },[dispatch,order.id]);

    const CreateOrder = () =>{
        const orders_detail = cart.map(ct => (
            {food_plate_id:ct.id,quantity:ct.count,status:'Creado'}
        ));
        const data = {
            table_id: localStorage.getItem('table'),
            status_id: 1, orders_detail: orders_detail
        }
        console.group(data);
        dispatch(create_order(
            data, wait_order,
            success_order, error_order, 
            update_order, clean
        ));
    }

    const UpdateOrder = () => {
        const orders_detail = cart.map(ct => (
            {food_plate_id:ct.id,quantity:ct.count,status:'Creado'}
        ));
        dispatch(update_order_ocd(
            orders_detail, order.id, wait_order,
            error_order, update_order, clean
        ));
    }

    return (
        <>
        {!order.id && <h4 className="font-uber-move-medium">Tu pedido</h4>}
        {order.id && <h4 className="font-uber-move-medium" onClick={handleShow}>Numero de Orden {order.id}</h4>}

        { (order.id && order.status) ?  <h6>Estado <strong className="text-success">{order.status}</strong></h6> 
        : order.pending && <Spinner/> 
        }

        <OrderDetail show={show} handleClose={handleClose} order={order}/>

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
        {order.pending && <Spinner/>}
        {(!order.id && !order.pending) && <button type="button" onClick={CreateOrder} className="btn btn-success btn-lg btn-block">Realizar Pedido</button>}
        {(order.id && !order.pending)&& <button type="button" onClick={UpdateOrder} className="btn btn-success btn-lg btn-block">Agregar al Pedido</button>}
        </div>
        </>
    )
}
export default Order;