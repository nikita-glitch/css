import React from "react";
import './Project.css'
import logo from '../../../../static/project.svg'

const Project = () => {
  
  return(
    <section class="main__section-projects">
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <div class='container'>
        <h3 class='section_projects__p-size_21'>40+</h3>
        <p class='section_projects__p'> проектов</p>
      </div>
      
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <p class='section_projects__p-size_21'>40+ проектов</p>
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <p class='section_projects__p-size_21'>40+ проектов</p>
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <p class='section_projects__p-size_21'>40+ проектов</p>
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <p class='section_projects__p-size_21'>40+ проектов</p>
      <img class='section-projects__logo' alt='logo' src={logo}/>
      <p class='section_projects__p-size_21'>40+ проектов</p>
    </section>
  );
}
export default Project;