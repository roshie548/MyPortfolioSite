import React from 'react'
import './../css/AboutBlock.css'
import SquareImage from "./SquareImage";
import {Element} from "react-scroll/modules";

const AboutBlock = () =>
    <Element name="aboutblock">
    <div className="about-block">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400" rel="stylesheet"/>
        <div className="column left">
            <p>
            <div className={"big"}> I am an avid believer</div>
                in the transformative power of technology and the creative process.
                As such, I find myself feeling most fulfilled in the intersection of computer science and graphic
                design.
            </p>
            <p>
                My current experience lies in software engineering, mobile development, and front-end.
            </p>
            <p>
                I haven't found my exact niche yet, but I take immense pride in learning new skills. At the
                moment,
                I'm aspiring to learn more about user experience and interface.
            </p>
            <p>
                Apart from my professional interests, I like playing basketball, visiting beaches,
                and exploring new places with friends.
            </p>
            <p>
                I find great pleasure in connecting deeply with people and hearing their personal
                experiences - these are the moments in which I find my inspiration. If you'd like to
                get in touch
                or just chat, feel free to contact me!
            </p>
        </div>
        <div className="column right">
            {squarePictures}
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