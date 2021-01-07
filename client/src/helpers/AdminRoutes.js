import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

function AdminRoutes({component: Component, ...rest}) {
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin);
    console.log(isAdmin)
    return (
        <Route {...rest} render={props => {
            if(isAdmin) {
                return <Component {...props} />
            } else {
                return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
        }} />
    )
}

export default AdminRoutes
