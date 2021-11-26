import React from "react";
import {Grid} from "@chakra-ui/react"
import Nav from "./Nav";
import {Route} from 'react-router-dom';

const LoginLayout = ({children}) => {
    return (
        <Grid
            minH="100vh"
            templateColumns="repeat(3, 1fr)"
            templateRows="max-content"
            gap={6}
            p={1}
        >
            <Nav/>
            {children}
        </Grid>
    )
};

export const LoginLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <LoginLayout>
                <Component {...props} />
            </LoginLayout>
        )}/>
    )
};
