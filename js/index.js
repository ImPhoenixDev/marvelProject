console.log("Hola mundo");

let ironMan =
  "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";

let ironManId =
  "https://gateway.marvel.com:443/v1/public/characters/1009368?&ts=1&apikey=9247cc40ccabf6b7899f5b61ee20f4e3&hash=c7b493fe930ae3d81e59433eccb77ab9";
fetch(ironManId)
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  })

  .catch(() => {
    console.log("Algo anda mall ¬¬");
  });
