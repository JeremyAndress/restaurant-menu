import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Table = () => {

    return (
        <div className="col d-flex justify-content-center  padding-top-card">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title text-center">Elegir una mesa</h5>
            <p className="card-text">Cada orden realizada por el sistema sera guardada con la mesa elegida en el siguiente boton.</p>
            <div className="d-flex justify-content-center">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Presione Aqui
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Table;