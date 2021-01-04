import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoutes({component: Component, ...rest}) {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    return (
        <Route {...rest} render={props => {
            if(isLoggedIn) {
                return <Component {...props} />
            } else {
                return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
        }} />
    )
}

export default PrivateRoutes
