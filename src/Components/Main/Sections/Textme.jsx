import React from "react";
import "./Textme.css";
import logo from "../../../../static/Frame.svg";

const Textme = () => {
  return (
    <section class="main__section-textme">
      <img class="section-textme__img" src={logo} alt="" />
      <div class="section-textme__container-textme">
        <h2 class="container-textme__header h2_header">Дизайн и верстка</h2>
        <p class="container-textme__p p_text">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
        <button class="container-textme__button button">
           НАПИСАТЬ МНЕ
        </button>
      </div>
    </section>
  );
};
export default Textme;
