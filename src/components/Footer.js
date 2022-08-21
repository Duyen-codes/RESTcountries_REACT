import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${classes.footer} ${darkMode ? "light" : ""}`}>
      Rest Countries React 2022
    </footer>
  );
};

export default Footer;
