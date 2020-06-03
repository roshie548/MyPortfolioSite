import React from 'react'
import '../css/AboutBlock.scss'
import SquareImage from "./SquareImage";
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";

const offset = 60;

const AboutBlock = () =>
    <Element name="aboutblock">
    <div className="about-block">
        <div className="column left">
            {squarePictures}
        </div>
        <div className="column right">
                <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                    <div className="big">
                        <i className="fas fa-laptop-code"/> I like building cool things
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                    <p>
                        I'm a software engineer and mobile developer
                    </p>
                </ScrollAnimation>
                    <p>
                        <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                            My programming skills include:
                        </ScrollAnimation>
                        <li>
                            <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                                <span className="skill">Java</span>
                                <span className="skill">Python</span>
                                <span className="skill">Go</span>
                                <span className="skill">Swift</span>
                                <span className="skill">SQL</span>
                                <span className="skill">React</span>
                                <span className="skill">HTML</span>
                                <span className="skill">CSS</span>
                            </ScrollAnimation>
                        </li>
                    </p>
                    <p>
                        <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                            I also have experience working with:
                        </ScrollAnimation>
                        <li>
                            <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={offset}>
                                <span className="skill">AWS</span>
                                <span className="skill">Firebase</span>
                                <span className="skill">Google Cloud Platform</span>
                                <span className="skill">SQL Databases</span>
                                <span className="skill">Time Series</span>
                            </ScrollAnimation>
                        </li>
                    </p>
        </div>
    </div>
    </Element>;

const pictures = [
    [
        new SquareImageObj(require("./../images/grid1.jpg"), 0),
        new SquareImageObj(require("./../images/grid2.jpg"), 250),
        new SquareImageObj(require("./../images/grid3.jpg"), 500)
    ],
    [
        new SquareImageObj(require("./../images/grid5.jpg"), 0),
        new SquareImageObj(require("./../images/grid4.jpg"), 250),
        new SquareImageObj(require("./../images/grid6.jpg"), 500)
    ],
    [
        new SquareImageObj(require("./../images/grid7.jpg"), 0),
        new SquareImageObj(require("./../images/grid8.jpg"), 250),
        new SquareImageObj(require("./../images/grid9.jpg"), 500),
        new SquareImageObj(require("./../images/grid10.jpg"), 750)
    ]
];

const squarePictures = pictures.map((item) => {
    let pics = [];
    for (let i of item) {
        pics.push(<SquareImage src={i.src} delay={i.delay}/>);
    }
    return <div className={"column img"}>{pics}</div>
});

function SquareImageObj(src, delay) {
    this.src = src;
    this.delay = delay;
}


export default AboutBlock;