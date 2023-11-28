import React from "react";
import "./Skills.css";
import image from "../../../../static/Rectangle3.png";

const Skills = () => {
  return (
    <section class="main__section-skills">
      <div class="section-skills__container">
        <h2 class="container__header h2_header">Мои навыки</h2>
        <p class="container__text">Adobe Photoshop</p>
        <div class="container__rectangle">
          <div class="rectangle__blue"></div>
          <div class="rectangle__silver"></div>
        </div>
        <p class="container__text">Adobe Photoshop</p>
        <div class="container__rectangle">
          <div class="rectangle__blue"></div>
          <div class="rectangle__silver"></div>
        </div>
        <p class="container__text">Adobe Photoshop</p>
        <div class="container__rectangle">
          <div class="rectangle__blue"></div>
          <div class="rectangle__silver"></div>
        </div>
      </div>
      <img class="section-skills__image" alt="me" src={image} />
    </section>
  );
};
export default Skills;
