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
        {/* <Routes>
          <Route to="/" component={Main} />
          </Routes>
          <div className="app-main">
            <Main />
          </div> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="app-main">
                <Main />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
