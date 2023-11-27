import React from "react";
import './Navbar.css'
import logo from '../../../static/WD.svg'

const Navbar = () => {
  return (
    <nav class="navbar">
      <img class="navbar__logo" alt="logo" src={logo}/>
      <ul class="navbar__list">
        <li class="list__element list__element_focused">
          <a class="list__link">ГЛАВНАЯ</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">ОБ АВТОРЕ</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">РАБОТЫ</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">ПРОЦЕСС</a>
        </li>
        <li class="list__element list__element_focused">
          <a class="list__link">КОНТАКТЫ</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
