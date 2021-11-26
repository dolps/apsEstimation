import React from 'react';
import {DashboardLayoutRoute} from "./components/shared/DashboardLayout";
import {LoginLayoutRoute} from "./components/shared/LoginLayout";
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import LoginForm from "./components/auth/loginForm";
import ConfirmForm from "./components/auth/confirmForm";
import UseCases from "./components/usecases/UseCases";
import NotFound from "./components/shared/NotFound";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Redirect to="/projects"/>)
                    }}/>
                    <LoginLayoutRoute exact path="/login" component={LoginForm}/>
                    <LoginLayoutRoute exact path="/confirm" component={ConfirmForm}/>
                    <DashboardLayoutRoute exact path="/projects" component={Projects}/>
                    <DashboardLayoutRoute exact path="/projects/:projectId/usecases" component={UseCases}/>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
