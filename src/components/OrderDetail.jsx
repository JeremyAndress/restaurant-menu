import React from 'react';
import Modal from 'react-bootstrap/Modal';

const OrderDetail = ({show,handleClose,order}) =>{
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Numero de Orden {order.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <h6>husky gei</h6>
        </Modal.Footer>
        </Modal>
    )
}

export default OrderDetail;