import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";

import {CurrentUserContext} from '../utils/context/CurrentUserContext';

const ProtectedRoute = ({component: Component, ...props}) => {
    const currentUser = useContext(CurrentUserContext);
    console.log('In PR ' + props.path);
    console.log(props.loggedIn);
    console.log(currentUser);
    return (
        <Route exact={props.exact} path={props.path}
            render = {() =>
                props.loggedIn === true ? <Component {...props}/> : <Redirect to="/sign-in"/>
            }
        />
    );
};


/*function ProtectedRoute({loggedIn, children, redirect})
{
    return loggedIn ? children : <Redirect to={redirect} />;
} */

export default ProtectedRoute;
/*

import React from 'react';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    console.log('In PR ' + props.path);
    console.log(props.loggedIn);

    return (
        <Route exact={props.exact} path={props.path}>
            {() =>
                props.loggedIn === true ? <Component {...props} /> : <Redirect to="/sign-in"/>
            }
        </Route>
    );
};

export default ProtectedRoute;*/
