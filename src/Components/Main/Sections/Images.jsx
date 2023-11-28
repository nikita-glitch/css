import React from "react";
import "./Images.css";
import logoTable from "../../../../static/Rectangle 7.3.png";
import logoDesk from "../../../../static/Rectangle 7.6.png";
import view from "../../../../static/view.svg";

const Images = () => {
  return (
    <section class="main__section-images">
      <div class="section-images__container">
        <img class="container__image" src={logoDesk} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoTable} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoDesk} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoTable} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoDesk} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoTable} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoDesk} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
      <div class="section-images__container">
        <img class="container__image" src={logoTable} alt="" />
        <div class="container__overlay">
          <img class="overlay__overlay-image" alt="" src={view} />
        </div>
      </div>
    </section>
  );
};
export default Images;
