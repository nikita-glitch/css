import React from "react";
import "./Work.css";
import image from '../../../../static/Rectangle 5.png'

const Work = () => {
  return (
    <section class="main__section-work">
      <h2 class="section-work__header h2_header">Как я работаю</h2>
      <p class="section-work__p p_text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <img class="section-work__image" alt="" src={image} />
    </section>
  );
};
export default Work;
