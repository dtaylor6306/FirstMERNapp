import React, {useContext} from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Students from "./components/Students/Students";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Home from "./components/Home/Home";

function Router(){
    const {loggedIn} = useContext(AuthContext);
    
    return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route >
            {loggedIn === false && (
                    <>
                    <Route path = "/register">
                        <Register/>
                    </Route>
                    <Route path = "/login">
                        <Login/>
                    </Route>
                </>
            )}
            {loggedIn === true && (
                <>
                    <Route path = "/student">
                     <Students/>
                    </Route>
                </>
            )}

        </Switch>
    </BrowserRouter>
    )
};

export default Router;