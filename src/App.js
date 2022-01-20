import React from "react"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Date from "./components/Date";
import Main from "./components/Main";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="App">
        {/* <NavBar /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a> */}
      <Date />
      <Main />
      <Photo />
    </div>
  );
}

export default App;
