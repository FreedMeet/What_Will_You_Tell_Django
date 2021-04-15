import './App.css';
import * as React from "react";
import {Header} from "./components/header/Header";
import {FC} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

const App: FC = () => {
    return (
        <div className="App">
            <Header/>
            <hr/>
            <div className="main-content">
                <Switch>
                    <Route path='/news' render={() => <div>News</div>}/>
                    <Route path='/news/:newsId?' render={() => <div>DetailNews</div>}/>
                    <Route path='/about' render={() => <div>About</div>}/>
                    <Route path='/contacts' render={() => <div>Contacts</div>}/>
                    <Route path='/profile' render={() => <div>Profile</div>}/>
                    <Route path='/login' render={() => <div>Login</div>}/>
                    <Route path='/register' render={() => <div>Register</div>}/>
                    <Route path='*' render={() => <div>Not Found 404</div>}/>
                </Switch>
            </div>
        </div>
    );
}

export const MainApp: FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    )
}
