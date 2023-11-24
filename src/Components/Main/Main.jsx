import React from "react";
import Textme from "./Sections/Textme";
import Aboutme from "./Sections/Aboutme";
import Project from "./Sections/Project";
import Skills from "./Sections/Skills";
import Work from "./Sections/Work";
import Images from "./Sections/Images";
import Website from "./Sections/Website";
import './Main.css'

const Main = () => {
  return (
    <main class="main">
      <Textme/>
      <Aboutme/>
      <Project/>
      <Skills/>
      <Work/>
      <Images/>
      <Website/>
    </main>
  );
};
export default Main;
