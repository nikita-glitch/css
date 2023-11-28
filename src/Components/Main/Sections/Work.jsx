import React from "react";
import "./Work.css";
import image1 from "../../../../static/Rectangle 5.png";
import image2 from "../../../../static/play-button.svg";

const Work = () => {
  return (
    <section class="main__section-work">
      <h2 class="section-work__header h2_header">Как я работаю</h2>
      <p class="section-work__p p_text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <div class="section-work__container-work">
        <img class="container-work__image" alt="" src={image1} />
        <div class="container-work__overlay-container">
          <img class="overlay-container__overlay-image" alt="" src={image2}/>
        </div>
      </div>
    </section>
  );
};
export default Work;
