import axios from "axios";
import React from "react";
import Router from "./Router";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Router/>
    </>
  )
};


export default App;
