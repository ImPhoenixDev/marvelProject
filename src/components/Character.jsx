import React from "react";
import "../assets/styles/components/Character.styl";

const Character = props => {
  const { name, comics, modification, thumbnail } = props;
  return (
    <div className="character">
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
