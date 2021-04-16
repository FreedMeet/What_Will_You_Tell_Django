import './App.css';
import * as React from "react";
import {Header} from "./components/Header/Header";
import {FC} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {RegisterPage} from "./components/AuthPage/RegisterPage";
import {LogoutPage} from "./components/AuthPage/LogoutPage";
import {NewsPage} from "./components/News/NewsPage";

const App: FC = () => {
    return (
        <div className="App">
            <Header/>
            <hr/>
            <div className="main-content">
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/news'/>
                    </Route>
                    <Route path='/news' render={() => <NewsPage />}/>
                    <Route path='/news/:newsId?' render={() => <div>DetailNews</div>}/>
                    <Route path='/profile' render={() => <div>Profile</div>}/>
                    <Route path='/register' render={() => <RegisterPage />}/>
                    <Route path='/logout' render={() => <LogoutPage />}/>
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
