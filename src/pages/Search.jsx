import React, { useState } from "react";
import AppBody from "../components/AppBody";
import Character from "../components/Character";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import useMarvelApi from "../hooks/useMarvelApi.jsx";

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

//var inputUser = prompt("Enter a character's name", "Iron Man");
function getHeroName() {
  var inputUser = "Iron Man";
  if (inputUser != null) {
    var search = searchNameStart(inputUser);
    return search;
  }
}

export default function Search() {
  var API = getHeroName();
  const [selector, setSelector] = useState(0);
  const marvelApi = useMarvelApi(API);

  function handleLeft() {
    if (selector > 0) {
      setSelector(selector - 1);
    }
  }

  function handleRight() {
    if (selector < marvelApi.data.results.length - 1) {
      setSelector(selector + 1);
    }
  }
  return (
    <AppBody>
      <Header />
      {marvelApi.data !== undefined && (
        <Character
          comics={marvelApi.data.results[selector].comics.available}
          modification={marvelApi.data.results[selector].modified}
          thumbnail={
            marvelApi.data.results[selector].thumbnail.path +
            "." +
            marvelApi.data.results[selector].thumbnail.extension
          }
          onArrowLeftClick={handleLeft}
          onArrowRightClick={handleRight}
        />
      )}
      <Hero>
        {marvelApi.data !== undefined && (
          <Content
            name={marvelApi.data.results[selector].name}
            description={marvelApi.data.results[selector].description}
          />
        )}
      </Hero>
      <Footer />
    </AppBody>
  );
}
