import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {

    let jwt = localStorage['token'];
    if (jwt === "null") {
        jwt = null;
    }
    let result = !!jwt;
    console.log("localstorage", result);
    return result;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;