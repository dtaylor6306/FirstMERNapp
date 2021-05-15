import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


const AuthContext = createContext();

function AuthContextProvider(props){
    const [loggedIn, SetLoggedIn] = useState(undefined);
    
    async function getLoggedIn(){
        const loggedInRes = await axios.get("https://dtaylor6306-firstmern.herokuapp.com/auth/loggedIn");
        SetLoggedIn(loggedInRes.data);
    }
    
    useEffect(()=>{
        getLoggedIn();
    }, []);

    return (
    <AuthContext.Provider value = {{loggedIn, getLoggedIn}} >
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext;
export  {AuthContextProvider};