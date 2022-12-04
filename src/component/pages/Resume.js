import React from "react";
import resume1 from "../../images/ConstanFernandoResume-1.png";
import fullresume from "../pages/ConstanFernandoResume.pdf";


export default function Resume() {
  return (
    <div id="resume">
    <h3>Resume:</h3>
    <img src={resume1}/>
    <a href={fullresume} download>Link</a>
    </div>
  );
}
