import React, { useState, useEffect } from "react";
import Left from "../components/Left";
import Character from "../components/Character";
import Right from "../components/Right";
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
  var inputUser = prompt("Como empieza el nombre de tu heroe?", "Iron Man");
  if (inputUser != null) {
    var search = searchNameStart(inputUser);
    return search;
    //    callAPI(search);
  }
}
// function callAPI(search) {
//   fetch(search)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       console.log(json);
//     })
//     .then(json => {
//       console.log(json);
//     })
//     .catch(() => {
//       console.log("Algo anda mal ¬¬");
//     });
// }

const App = () => {
  const [estadoGuardado, actualizarAEstado] = useState([]);

  useEffect(() => {
    fetch(getHeroName())
      .then(response => {
        return response.json();
      })
      .then(data => {
        actualizarAEstado(data);
      });
  }, []);

  console.log(estadoGuardado);

  return (
      <Left>
        <Character />
      </Left>
      <Right>
        <Character></Character>
      </Right>
  );
};

export default App;
