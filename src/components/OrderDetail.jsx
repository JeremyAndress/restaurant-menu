import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {get_order_detail} from '../api/detail';
import {
    loading_detail,error_detail,
    success_detail
} from '../redux/actions/detail'
  
const OrderDetail = ({show,handleClose,order}) =>{
    const dispatch = useDispatch()
    let history = useHistory();
    const detail = useSelector(store => store.detail)

    useEffect(()=>{
        if(order.id){
            dispatch(get_order_detail(
                order.id, loading_detail,
                success_detail, error_detail
            ))
        }
    },[dispatch,order.id,show])

    const payment = ()=>{
        history.push('/payment');
    }
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Orden #{order.id} Estado <strong className="text-success">{order.status}</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Plato</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                
                {detail.data.map(dt =>(
                <tr key={dt.id}>
                    <td>{dt.name}</td>
                    <td>{dt.quantity}</td>
                    <td>{dt.price}</td>
                    <td>{dt.status}</td>
                </tr>
                ))}
                

            </tbody>
            </table>


        </Modal.Body>
        <Modal.Footer>
        <button type="button" onClick={payment} className="btn btn-success btn-lg btn-block">Pagar</button>
            
        </Modal.Footer>
        </Modal>
    )
}

export default OrderDetail;
