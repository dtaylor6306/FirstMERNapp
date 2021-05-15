import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

function Login(){
    //states
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
                email, 
                password, 
            };

            await axios.post("https://dtaylor6306-firstmern.herokuapp.com/auth/login",loginData );
            await getLoggedIn();
            history.push("/");

        }catch(err){
            console.error(err)
        }
    }
    return(
        <div>
            <h1> Log into your account.</h1>
            <form onSubmit = {login}>
                <input type = "email" 
                placeholder = "Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <input type = "password" 
                placeholder = "Password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <button type = "submit" >Log in</button>
            </form>
        </div>
    );
};


export default Login;