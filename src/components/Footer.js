import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Trade Management App</p>
    </footer>
  );
  
};

export default Footer;
