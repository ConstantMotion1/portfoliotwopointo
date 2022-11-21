import React from "react";
import resume1 from "../../images/resume1.png";
import resume2 from "../../images/resume2.png";
import fullresume from "../pages/FullStackResume.pdf";


export default function Resume() {
  return (
    <div id="resume">
    <h3>Resume:</h3>
    <img src={resume1}/>
    <img src={resume2}/>
    <a href={fullresume} download>Link</a>
    </div>
  );
}
