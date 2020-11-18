import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RouteCpx = ({component: Component, path,exact=false,requiredRoles}) =>{
    const table = localStorage.getItem('table');
    const order = localStorage.getItem('order');
    return(
        <Route
            exact={exact}
            path={path}
            render={ (props)=>
                table ? 
                !order ? (<Component {...props}/>): (
                    <Redirect 
                        to={{
                            pathname:"/"
                        }}
                    />
                ): <Redirect 
                        to={{
                            pathname:"/table"
                        }}
                    />
            }
        />
    )
}

export default RouteCpx;