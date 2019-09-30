import React, { useState, useEffect } from "react";
import AppBody from "../components/AppBody";
import Character from "../components/Character";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "../assets/styles/App.styl";
// var ironMan =
//   "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

// var ironManId =
//   "https://gateway.marvel.com:443/v1/public/characters/1009368?&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

// var loki =
//   "https://gateway.marvel.com:443/v1/public/characters?name=Loki&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

// var capi =
//   "https://gateway.marvel.com:443/v1/public/characters?name=Captain%20America&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

function quitarEspacios(st) {
  var link;
  link = st.replace(/ /g, "%20");
  return link;
}

function searchNameStart(inputBrowse) {
  var nameStartsWithBrowse = quitarEspacios(inputBrowse);
  var linkBrowse = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameStartsWithBrowse}&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9`;
  return linkBrowse;
}

function getHeroName() {
  var inputUser = prompt("Enter a character's name", "Iron Man");
  if (inputUser != null) {
    var search = searchNameStart(inputUser);
    return search;
  }
}

const App = () => {
  const [savedState, updateState] = useState([]);

  useEffect(() => {
    fetch(getHeroName())
      .then(response => {
        return response.json();
      })
      .then(data => {
        updateState(data);
      });
  }, []);

  console.log(savedState);

  return (
    <AppBody>
      <Character />
      <Hero>
        <Header />
        <Content />
        <Footer />
      </Hero>
    </AppBody>
  );
};

export default App;
