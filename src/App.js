import React from 'react';
import {
    ChakraProvider,
    Box,
    Grid,
    theme,
} from '@chakra-ui/react';
import Layout from "./components/Layout";
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import LoginForm from "./components/auth/loginForm";
import ConfirmForm from "./components/auth/confirmForm";
import PrivateRoute from "./Route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/NotFound";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <Router>
                            <Layout>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        render={() => {
                                            return (<Redirect to="/projects"/>)
                                        }}
                                    />
                                    <Route exact path="/login">
                                        <LoginForm></LoginForm>
                                    </Route>
                                    <PrivateRoute exact path="/projects/:id">
                                        <Dashboard/>
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/projects">
                                        <Projects/>
                                    </PrivateRoute>
                                    <Route exact path="/confirm">
                                        <ConfirmForm></ConfirmForm>
                                    </Route>
                                    <Route>
                                        <NotFound></NotFound>
                                    </Route>
                                </Switch>
                            </Layout>
                        </Router>
                    </Grid>
                </Box>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
