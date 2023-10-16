import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the content of the element with the 'year' id to the current year
  document.getElementById("year").textContent = currentYear;
  return (
    <div class="branding">
      <small>
        &copy; <span id="year"></span>
        <Link>
        <strong>Spacetagram.</strong> 
        </Link>
        All rights reserved.
      </small>
    </div>
  );
};

export default Footer;