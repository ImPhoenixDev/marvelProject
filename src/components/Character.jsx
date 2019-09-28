import React from "react";
import "../assets/styles/components/Character.styl";
const Character = () => (
  <div className="character">
    <img
      className="character-img"
      src="http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg"
      alt=""
    />
    <div className="character-details">
      <h2 className="character__name">Iron Man</h2>
      <h3 className="character__comics__available">Comics avilable: 2122</h3>
      <h4 className="character__last__modification">
        Character last modification: 2016-09-28T12:08:19-0400
      </h4>
    </div>
  </div>
);

export default Character;
