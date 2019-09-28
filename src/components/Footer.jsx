import React from "react";
import "../assets/styles/components/Footer.styl";

const Footer = ({ children }) => (
  <footer className="footer">
    <a href="http://marvel.com" className="footer__atribution" target="_blank">
      Data provided by Marvel. © 2019 MARVEL
    </a>
  </footer>
);

export default Footer;
