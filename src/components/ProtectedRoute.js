/*//этим компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи
*/
import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";

import {CurrentUserContext} from '../utils/context/CurrentUserContext';

const ProtectedRoute = ({component: Component, ...props}) => {
    const currentUser = useContext(CurrentUserContext);
    console.log('In PR');
    console.log(currentUser);
    console.log(currentUser['loggedIn']);
    console.log(typeof currentUser);
    const { loggedIn } = currentUser;
    console.log(loggedIn);

    var err = new Error();
    console.log(err.stack)
    return (
        <Route exact={props.exact} path={props.path}
            render = {() =>
                currentUser.loggedIn === true ? <Component {...props}/> : <Redirect to="/sign-in"/>
            }
        />
    );
};

export default ProtectedRoute;
