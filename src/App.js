import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Date from "./components/Date";
import Main from "./components/Main";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route to="/" component={Main} /> */}
          <Route to="/" component={Photo} />
        </Routes>
      </Router>
      <div className="app-top">
        <p>Look up NASA space photo of the day!</p>
      </div>
      <div className="app-main">
        {/* <Main /> */}
        <Photo />
      </div>
    </div>
  );
}

export default App;
