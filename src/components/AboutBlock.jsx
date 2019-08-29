import React from 'react'
import '../css/AboutBlock.scss'
import SquareImage from "./SquareImage";
import {Element} from "react-scroll/modules";
import ScrollAnimation from "react-animate-on-scroll";

const AboutBlock = () =>
    <Element name="aboutblock">
    <div className="about-block">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400" rel="stylesheet"/>

        <div className="column left">
            {squarePictures}
        </div>
        <div className="column right">
                <ScrollAnimation animateIn="fade-in" delay={250} animateOnce={true} offset={50}><div className="big">
                    <i className="fas fa-laptop-code"/> I like building cool things  </div></ScrollAnimation>
                <ScrollAnimation animateIn="fade-in" delay={500} animateOnce={true} offset={0}>
                    <p>
                        I'm a software engineer and mobile developer
                    </p>
                    <p>
                        My programming skills include: <br/>
                        <li>
                            <span className="skill">Java</span>
                            <span className="skill">Python</span>
                            <span className="skill">Go</span>
                            <span className="skill">Swift</span>
                            <span className="skill">SQL</span>
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                        </li>
                    </p>
                    <p>
                        I also have experience working with:
                        <li>
                            <span className="skill">AWS</span>
                            <span className="skill">Firebase</span>
                            <span className="skill">Google Cloud Platform</span>
                            <span className="skill">SQL Databases</span>
                            <span className="skill">Time Series</span>
                        </li>
                    </p>
                </ScrollAnimation>
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