import React from "react";
import './Footer.css';
import VK from '../../static/vk-social-network-logo.svg'

const Footer = () => {

  return(
    <footer class='footer'>
      <div class='text_container'>
        <h3 class='footer__h3'>Иванов Иван</h3>
        <p class='footer__copyright'>(с) 2018. Все права защищены.</p>
      </div>
      <div class='img_container'>
      <img class='footer__logo' alt='' src={VK}/>
      <img class='footer__logo' alt='' src={VK}/>
      <img class='footer__logo' alt='' src={VK}/>
      </div>
    
    </footer>
  )
}
export default Footer;