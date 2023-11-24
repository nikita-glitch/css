import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
      <img class="navbar__logo" alt="logo" src=''/>
      <ul class="navbar__list">
        <li class="list__element list__element_focused">
          <a class="list__link">Главная</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">Об авторе</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">Работы</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">Процесс</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
