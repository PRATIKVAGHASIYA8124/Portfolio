import react from "../assets/img/React.svg";
import node from "../assets/img/node.svg";
import express from "../assets/img/express.svg";
import flutter from "../assets/img/flutter.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import mongodb from "../assets/img/mongodb.svg";
import c from "../assets/img/c++.svg";
import github from "../assets/img/github.svg";
import git from "../assets/img/git.svg";
import postman from "../assets/img/postman.svg";
import vscode from "../assets/img/vscode.svg";
import javascript from "../assets/img/javascript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h3>Professional Skillset</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"autoPlay={true} 
  autoPlaySpeed={1000}>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h3>Tools</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} 
  autoPlaySpeed={1500}>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>git</h5>
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={vscode} alt="Image" />
                                <h5>Vscode</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
