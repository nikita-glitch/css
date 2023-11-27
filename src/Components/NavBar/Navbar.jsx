import React from "react";
import "./Navbar.css";
import logo from "../../../static/WD.svg";

const Navbar = () => {
  return (
    <nav class="navbar">
      <img class="navbar__logo" alt="logo" src={logo} />
      <ul class="navbar__list">
        <li class="list__element list__element_focused">ГЛАВНАЯ</li>
        <li class="list__element list__element_focused">ОБ АВТОРЕ</li>
        <li class="list__element list__element_focused">РАБОТЫ </li>
        <li class="list__element list__element_focused">ПРОЦЕСС </li>
        <li class="list__element list__element_focused">КОНТАКТЫ </li>
      </ul>
    </nav>
  );
};
export default Navbar;
