import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Date from "./components/Date";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route to="/" component={Main} /> */}
          <Route to="/" component={Main} />
        </Routes>
      </Router>
      <div className="app-main">
        <Main />
      </div>
    </div>
  );
}

export default App;
