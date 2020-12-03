import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import {
    success_order
} from '../redux/actions/order';

const Payment = ({id}) =>{
    const [load,setLoad] = useState(true);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        document.body.style.backgroundColor = '#E9ECEF'
        setInterval(() => {
            setLoad(false);
            setInterval(()=>{
                dispatch(success_order(null))
                localStorage.removeItem("order");
                history.push('/order');
                window.location.reload();
            },2000)
        }, 5000);

        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    }, [dispatch,history])

    return (
        <div className="container">
        {load ? 
        <h1 className="text-center m-5">Para efectuar el pago dirigirse a caja</h1> :
        <h1 className="text-center m-5">Pago efectuado</h1>
        }
        <div className="d-flex justify-content-center">
        <svg id="check" className={
            load ? 'progress': 'ready'
        } version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" >
            <circle id="circle" cx="50" cy="50" r="46" fill="transparent" />
            <polyline id="tick" points="25,55 45,70 75,33" fill="transparent" />
        </svg>
        </div>
        </div>
    )

}
export default Payment;