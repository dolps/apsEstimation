import {useAuth} from "../hooks/useAuth";
import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
            {...rest}
            render={() => user ? children : <Redirect to="/login"/>}
        >

        </Route>
    )
};

export default PrivateRoute
