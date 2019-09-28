import React from "react";
import "../assets/styles/components/Content.styl";
const Content = ({ children }) => (
  <div className="content">
    <h1 className="content__title">Hi, im a Title</h1>
    <p className="content__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, harum!
      Eaque quod, suscipit nesciunt libero saepe aut numquam facere id omnis
      consequatur ipsa ut accusantium itaque neque dicta quibusdam modi!
    </p>
  </div>
);

export default Content;
