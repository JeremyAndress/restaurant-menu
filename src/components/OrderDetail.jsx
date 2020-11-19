import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {get_order_detail} from '../api/detail';
import {
    loading_detail,error_detail,
    success_detail
} from '../redux/actions/detail'
  
const OrderDetail = ({show,handleClose,order}) =>{
    const dispatch = useDispatch()
    const detail = useSelector(store => store.detail)

    useEffect(()=>{
        dispatch(get_order_detail(
            order.id, loading_detail,
            success_detail, error_detail
        ))
    },[dispatch,order.id])

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
                </tr>
            </thead>
            <tbody>
                
                {detail.data.map(dt =>(
                <tr key={dt.id}>
                    <td>tallarines</td>
                    <td>{dt.quantity}</td>
                    <td>5000</td>
                </tr>
                ))}
                

            </tbody>
            </table>


        </Modal.Body>
        <Modal.Footer>
        <button type="button" class="btn btn-success btn-lg btn-block">Pagar</button>
            <h6>husky gei</h6>
        </Modal.Footer>
        </Modal>
    )
}

export default OrderDetail;