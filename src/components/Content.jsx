import React from "react";
import "../assets/styles/components/Content.styl";
const Content = props => {
  const { description, name } = props;
  return (
    <div className="content">
      <h1 className="content__title">{name}</h1>
      <p className="content__text">{description}</p>
    </div>
  );
};

export default Content;
