import React from "react";
import './Footer.css';
import VK from '../../static/vk-social-network-logo.svg'

const Footer = () => {

  return(
    <footer class='footer'>
      <div class='footer__text-container'>
        <h3 class='text-container__h3'>Иванов Иван</h3>
        <p class='text-container__copyright'>(с) 2018. Все права защищены.</p>
      </div>
      <div class='footer__img-container'>
        <img class='img-container__logo' alt='' src={VK}/>
        <img class='img-container__logo' alt='' src={VK}/>
        <img class='img-container__logo' alt='' src={VK}/>
      </div>
    
    </footer>
  )
}
export default Footer;