import React from 'react';
import linkedin from '../images/linkedin.png';
import githublinkin from '../images/githubinvert.png';
import overflow from '../images/overflow.png'
export default function Footer() {
  return (
    <div id="footer">
          <a href="https://github.com/ConstantMotion1">
            <img id="linkgit" src={githublinkin}/>
          </a>
          <a href="https://www.linkedin.com/in/constan-fernando/">
            <img id="linkin" src={linkedin}/>
          </a>
          <a href="https://stackoverflow.com/users/20558849/constantmotion1">
            <img id="linkover" src={overflow}/>
          </a>
    </div>
  )
};


