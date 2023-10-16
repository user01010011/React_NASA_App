import React, {useState, useEffect} from "react";

const Footer = () => {
//   // Get the current year
//   const currentYear = new Date().getFullYear();
//   // Set the content of the element with the 'year' id to the current year
//   document.getElementById("year").textContent = currentYear;

const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); 

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentYear(new Date().getFullYear()); 
    }, 1000); 

    return () => clearInterval(interval); 
}, []); 
  return (
    <div class="branding">
      <small>
        &copy; {currentYear}
        <strong> Spacetagram. </strong> 
        All rights reserved.
      </small>
    </div>
  );
};

export default Footer;