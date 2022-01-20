import React from "react"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img style={{width: "640px", height:"640px", borderRadius:"80px"}} src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" className="App-photo" alt="app-photo" />
        <p>
          Spacestagram: Image-sharing from the final frontier 
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a> */}
      </header>
      
    </div>
  );
}

export default App;
