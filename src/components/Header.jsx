import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.styl";

const Hero = ({ children }) => (
  <header className="header">
    <Link to="/home" className="header__home__link">
      Home
    </Link>
    <p className="header__title">
      Marvel Search
      <br />
      Database
    </p>
    <form className="header__search">
      <input
        type="text"
        name="search"
        palceholder="Search"
        className="header__search__input"
      />
      <input type="button" className="header__search__send" value="" />
    </form>
  </header>
);

export default Hero;
