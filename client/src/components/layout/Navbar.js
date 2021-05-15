import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";


function Navbar(){

    const {loggedIn} = useContext(AuthContext);

    return (
    <div>
        <Link className='navBarLink' to = "/">Home</Link>
        {loggedIn === false  && (
            <>
                <Link className='navBarLink' to = "/register">Register</Link>
                <Link className='navBarLink' to = "/login">Log in</Link>
            </>
        )}
        {loggedIn === true && (
            <> 
            <Link className='navBarLink' to = "/student">Students</Link>
            <LogOutBtn/>
            </>
        )}
    </div>
    );
};

export default Navbar;