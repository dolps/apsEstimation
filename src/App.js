import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {Logo} from './Logo';
import Layout from "./components/Layout";
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
                                    <PrivateRoute exact path="/projects/:id">
                                        <Dashboard/>
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/projects">
                                        <Projects/>
                                    </PrivateRoute>
                                    <Route exact path="/login">
                                        <LoginForm></LoginForm>
                                    </Route>
                                    <Route exact path="/confirm">
                                        <ConfirmForm></ConfirmForm>
                                    </Route>
                                    <Route>
                                        <NotFound></NotFound>
                                    </Route>
                                </Switch>
                            </Layout>
                        </Router>
                        {/*
                        <VStack spacing={8}>
                            <Logo h="40vmin" pointerEvents="none"/>
                            <Text>
                                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                            </Text>
                            <Link
                                color="teal.500"
                                href="https://chakra-ui.com"
                                fontSize="2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn Chakra
                            </Link>
                        </VStack>
                        */}

                    </Grid>
                </Box>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
