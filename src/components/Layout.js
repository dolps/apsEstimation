import React from "react";
import {Grid} from "@chakra-ui/react"
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <Grid
            minH="100vh"
            templateColumns="repeat(3, 1fr)"
            templateRows="max-content"
            gap={6}
            p={3}
        >
            <Nav/>
            {children}
        </Grid>
    )
};
export default Layout
