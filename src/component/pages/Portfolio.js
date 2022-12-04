import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project1 from '../../images/musichub.png';
import Project2 from '../../images/PJ-Loginscreen.png';
import PassGen from '../../images/passwordgen.png';
import TechBlog from '../../images/techblog.png';
import Project3 from '../../images/ezdossier.png';
import githublink from '../../images/github.png';
import githublinkin from '../../images/githubinvert.png';
import websitelink from '../../images/website.png';
import websitelinkin from '../../images/websiteinvert.png';

export default function Portfolio() {
  return (
    <Carousel fade id="cssCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project1}
          alt="First slide"
        />
        <Carousel.Caption>
          <a href="https://iva416.github.io/MusicHub/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/Iva416/MusicHub">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://psychic-journey.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/NathanKryz/psychic-journey">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TechBlog}
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://blogapedia.herokuapp.com/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/ConstantMotion1/Module14Challenge">
            <img id="link" src={githublink}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PassGen}
          alt="Forth slide"
        />
        <Carousel.Caption>
        <a href="https://constantmotion1.github.io/Module3Challenge/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/ConstantMotion1/Module3Challenge">
            <img id="link" src={githublink}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project3}
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <a href="https://ezdossier.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/ConstantMotion1/EZDossier">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};

