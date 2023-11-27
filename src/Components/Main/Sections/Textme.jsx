import React from "react";
import "./Textme.css";
import logo from '../../../../static/Frame.svg'

const Textme = () => {
  return (
    <section class="main__section-textme">
      <img class="section-textme__img" src={logo} alt="" />
      <div class='section-textme__container'>
      <h1 class="section-textme__header">Дизайн и верстка</h1>
      <p class="section-textme__p">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <button class="section-textme__button section__button">
        Написать мне
      </button>
      </div>
    </section>
  );
};
export default Textme;
