import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Date from "./components/Date";
import Main from "./components/Main";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-top">
        <p>Look up NASA space photo of the day!</p>
      </div>
      <div className="app-main">
        <Photo />
      </div>
    </div>
  );
}

export default App;
