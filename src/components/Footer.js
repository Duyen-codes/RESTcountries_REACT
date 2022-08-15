import React from "react";

const Footer = ({darkMode}) => {
  return <footer className={darkMode ? 'light' : ''}>Rest Countries React 2022</footer>;
};

export default Footer;
