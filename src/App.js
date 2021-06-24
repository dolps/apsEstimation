import React from 'react';
import {
    Box,
    Grid,
} from '@chakra-ui/react';
import Layout from "./components/shared/Layout";
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import LoginForm from "./components/auth/loginForm";
import ConfirmForm from "./components/auth/confirmForm";
import PrivateRoute from "./Route/PrivateRoute";
import UseCases from "./components/usecases/UseCases";
import NotFound from "./components/shared/NotFound";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <AuthProvider>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <Router>
                        <Layout>
                            <Switch>
                                <Route exact path="/" render={() => {
                                    return (<Redirect to="/projects"/>)
                                }}/>
                                <Route exact path="/login">
                                    <LoginForm/>
                                </Route>
                                <PrivateRoute exact path="/projects/:projectId/usecases">
                                    <UseCases/>
                                </PrivateRoute>
                                <PrivateRoute exact path="/projects">
                                    <Projects/>
                                </PrivateRoute>
                                <Route exact path="/confirm">
                                    <ConfirmForm/>
                                </Route>
                                <Route>
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </Layout>
                    </Router>
                </Grid>
            </Box>
        </AuthProvider>
    );
}

export default App;
