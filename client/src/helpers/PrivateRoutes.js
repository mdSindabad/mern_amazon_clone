import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoutes({component = Component, ...rest}) {
    const isLoggedIn = false;
    return (
        <Route {...rest} component={(props) => {
            isLoggedIn ? (
                <Redirect to='/' />
            ) : (
                <Component {...props} />
            )
        }} />
    )
}

export default PrivateRoutes
