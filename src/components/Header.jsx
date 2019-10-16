import React from "react";
import "../assets/styles/components/Header.styl";

const Hero = ({ children }) => (
  <header className="header">
    <a href="#" className="header__home__link">
      Home
    </a>
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
