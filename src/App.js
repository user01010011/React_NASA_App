import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Date from "./components/Date";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/" element={<div className="app-main"><Main /></div>} /> */}
        </Routes>
      </Router>
      <div className="app-main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
