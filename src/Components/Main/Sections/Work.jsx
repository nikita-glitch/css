import React from "react";
import "./Work.css";
import image1 from '../../../../static/Rectangle 5.png'
import image2 from '../../../../static/view.svg'


const Work = () => {
  return (
    <section class="main__section-work">
      <h2 class="section-work__header h2_header">Как я работаю</h2>
      <p class="section-work__p p_text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <div class='section-work__container-work'>
      <img class="container-work__image1" alt="" src={image1} />
      <img class="container-work__image2" alt="" src={image2} />
      </div>
      
    </section>
  );
};
export default Work;
