import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import Spinner from '../components/Spinner';
import DropBtn from '../components/DropBtn';
import {get_tables} from '../api/tables';
import {
    loading_tables,error_tables,
    wait_table
} from '../redux/actions/tables';

const Table = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const tables = useSelector(store => store.tables)

    useEffect(()=>{
        dispatch(get_tables(
            wait_table, loading_tables,
            error_tables
        ))
    },[dispatch])

    const addTable = (id) =>{
        localStorage.setItem('table',id);
        history.push('/order');
    }

    return (
        <div className="col d-flex justify-content-center  padding-top-card">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title text-center">Elegir una mesa</h5>
            <p className="card-text">Cada orden realizada por el sistema sera guardada con la mesa elegida en el siguiente boton.</p>
            {
                tables.pending ? 
                <Spinner/> : 
                <DropBtn tables={tables} addTable={addTable}/>
            }
        </div>
        </div>
        </div>
    )
}
export default Table;