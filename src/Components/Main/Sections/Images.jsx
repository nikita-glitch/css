import React from "react";
import './Images.css'
import logoTable from '../../../../static/Rectangle 7.3.png'
import logoDesk from '../../../../static/Rectangle 7.6.png'

const Images = () => {

  return(
    <section class='main__section-images'>
      <img class='section-images__image' src={logoDesk} alt=''/>
      <img class='section-images__image' src={logoTable} alt=''/>
      <img class='section-images__image' src={logoDesk} alt=''/>
      <img class='section-images__image' src={logoTable} alt=''/>
      <img class='section-images__image' src={logoTable} alt=''/>
      <img class='section-images__image' src={logoDesk} alt=''/>
      <img class='section-images__image' src={logoTable} alt=''/>
      <img class='section-images__image' src={logoDesk} alt=''/>
    </section>
  );
}
export default Images;