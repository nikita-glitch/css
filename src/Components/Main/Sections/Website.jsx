import React from "react";
import "./Website.css";

const Website = () => {
  return (
    <section class="main__section-website">
      <h2 class="section-website__header h2_header">Хотите веб-сайт?</h2>
      <p class="section-website__p p_text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <form class="section-website__form">
        <input class="form__name-input" placeholder="Ваше имя" />
        <input class="form__email-input" placeholder=" Ваш e-mail" />
        <input class="form__message-input" placeholder="Сообщение" />
      </form>
      <button class="section-website__button button">Отправить</button>
    </section>
  );
};
export default Website;
