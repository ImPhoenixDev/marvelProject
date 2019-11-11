import React from "react";
import "../assets/styles/components/Character.styl";
// import "./js/character.js";

const Character = props => {
  const {
    comics,
    modification,
    thumbnail,
    onArrowRightClick,
    onArrowLeftClick
  } = props;

  var arrows = document.getElementsByClassName("character__arrow");
  // Hover on image show arrows
  var hoverShow = () => {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove("character--hidden");
    }
  };
  //!Hover on image && hide arrows
  var hoverHide = () => {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.add("character--hidden");
    }
  };

  return (
    <div className="character">
      <nav
        className="character-navarrows"
        onMouseEnter={hoverShow}
        onMouseLeave={hoverHide}
      >
        <i
          className="character__arrow character--hidden"
          onClick={onArrowLeftClick}
        >
          ❬
        </i>
        <i
          className="character__arrow character--hidden"
          onClick={onArrowRightClick}
        >
          ❭
        </i>
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
