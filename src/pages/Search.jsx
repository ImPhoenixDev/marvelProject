import React, { useState } from "react";
import AppBody from "../components/AppBody";
import Character from "../components/Character";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import useMarvelApi from "../hooks/useMarvelApi";

function removeSpaces(string) {
  let link;

  if (string != null) {
    link = string.replace(/ /g, "%20");
  }
  return link;
}

function inputToUrl(inputBrowse) {
  const nameStartsWithBrowse = removeSpaces(inputBrowse);
  const linkBrowse = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameStartsWithBrowse}&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9`;
  return linkBrowse;
}

export default function Search() {
  const [selector, setSelector] = useState(4);
  const [inputUser] = useState("Iron Man");
  const [characterUrl, setCharacterUrl] = useState(inputToUrl(inputUser));
  const marvelApi = useMarvelApi(characterUrl);

  function getInput() {
    const input = prompt("hi", "Thor");
    return input;
  }

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
  function handleSearch(form) {
    console.log(this);

    setCharacterUrl(inputToUrl(form));
  }
  return (
    <AppBody>
      <Header onSendingSearch={handleSearch} />
      {marvelApi.data !== undefined && (
        <Character
          comics={marvelApi.data.results[selector].comics.available}
          modification={marvelApi.data.results[selector].modified}
          thumbnail={`${marvelApi.data.results[selector].thumbnail.path}.${marvelApi.data.results[selector].thumbnail.extension}`}
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
