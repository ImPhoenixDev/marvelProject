import React from "react";
import "../assets/styles/components/Character.styl";

const Character = props => {
  const { comics, modification, thumbnail } = props;
  window.addEventListener("load", event => {
    const arrow = document.getElementsByClassName("character__arrow");
    console.log(arrow);
    // const show = arrow.classList.toggle("character--hidden");
    // arrow.addEventListener("mouseover", show);
    console.log(arrow[1]);
  });
  return (
    <div className="character">
      <nav className="character-navarrows">
        <i className="character__arrow character--hidden">❬</i>
        <i className="character__arrow character--hidden">❭</i>
      </nav>
      <img className="character-img" src={thumbnail} alt="Character image" />
      <div className="character-details">
        <i className="book-icon icon"></i>
        <h3 className="character__comics__available">
          Comics avilable: {comics}
        </h3>
        <i className="pencil-icon icon"></i>
        <h4 className="character__last__modification">
          Character last modification: {modification}
        </h4>
      </div>
    </div>
  );
};

export default Character;
