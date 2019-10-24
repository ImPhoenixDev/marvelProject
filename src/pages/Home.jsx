import React from "react";
import Link from "react-router-dom";

import "../assets/styles/pages/Home.styl";

export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Marvel Search</h1>
      <form className="home__search">
        <input
          type="text"
          name="search"
          palceholder="Search"
          className="home__search__input"
        />
        <input type="button" className="home__search__send" value="" />
      </form>
    </div>
  );
}
