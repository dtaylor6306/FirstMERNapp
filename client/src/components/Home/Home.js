import React from "react";

function Home() {
   return ( <div className = "homeDiv"> 
       <h1>Welcome to my first MERN app!</h1>
       <h2>This website was made for teachers to view their lists of students!</h2>
       <p>In this app you can:</p>
       <ul>
           <li>Register a new account.</li>
           <li>Log in using that account.</li>
           <li>Create a list of students.</li>
           <li>Log out of the account.</li>
           <li>Only see certain pages based on logged in status.</li>
       </ul>
   </div>
   )
};
export default Home;