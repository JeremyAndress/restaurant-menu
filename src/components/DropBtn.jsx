import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropBtn = ({tables,addTable}) =>(
    <div className="d-flex justify-content-center">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Presione Aqui
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {tables.data.map(tbl =>( 
                <Dropdown.Item key={tbl.id} onClick={() => addTable(tbl.id)} as="button">Mesa {tbl.number}</Dropdown.Item>
            ))}   
        </Dropdown.Menu>
        </Dropdown>
    </div>
)
export default DropBtn;