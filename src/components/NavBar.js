import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";
// import Date from "./Date";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          <img
            className="app-photo"
            src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="app-icon"
          />
          <h5 className="app-name">Spacetagram</h5>
        </Link>
      </div>
      <div className="navbar-center">
        {/* <Date /> */}
      </div>
      <div className="navbar-right">
        <div className="navbar-icons">
          <a
            href="https://github.com/user01010011"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <BsGithub className="navbar-icon" />
          </a>
          <a
            href="https://medium.com/@isabella.y"
            target="_blank"
            rel="noreferrer"
            className="blog"
          >
            <BsMedium className="navbar-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/isabellayan/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <BsLinkedin className="navbar-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
