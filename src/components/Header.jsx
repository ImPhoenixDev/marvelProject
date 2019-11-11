import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.styl";

const Hero = props => {
  const { onSendingSearch } = props;
  const form = document.getElementsByClassName("header__search__input");

  function handleClick(e) {
    onSendingSearch(form[0].value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSendingSearch(form[0].value);
  }

  return (
    <header className="header">
      <Link to="/home" className="header__home__link">
        Home
      </Link>
      <p className="header__title">
        Marvel Search
        <br />
        Database
      </p>
      <form className="header__search" onSubmit={handleSubmit}>
        <input
          className="header__search__input"
          type="text"
          name="search"
          palceholder="Search"
        />
        <input
          type="button"
          className="header__search__send"
          value=""
          onClick={handleClick}
        />
      </form>
    </header>
  );
};

export default Hero;
