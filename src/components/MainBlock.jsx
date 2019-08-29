import React from 'react'
import '../css/MainBlock.scss'
import Avatar from "./Avatar";
import SocialMediaLink from "./SocialMediaLink";
import {Element, Link} from "react-scroll/modules";

const MainBlock = () =>
    <Element name="mainblock">
        <div className="main-block">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400" rel="stylesheet"/>
            <div className="left-container">
                <div className="banner-text">
                    <h1 className="fade-in one">Hi, I'm Roshan.</h1>
                    <div className="fade-in two">
                        <h2>I'm an avid believer in the transformative power of technology and the creative process.</h2>
                    </div>
                    <div className="fade-in five">
                        <h2> Currently a student at
                            <a href="https://www.berkeley.edu/" style={{color: '#FDB515'}}> UC Berkeley </a>
                            studying
                            <a href="https://eecs.berkeley.edu/" style={{color: '#00B0DA'}}> EECS</a>
                            . Former intern at
                            <a href="https://www.influxdata.com" className="influxdata"> InfluxData</a>
                        </h2>
                    </div>
                    <div className="links fade-in three">
                        {listItems}
                    </div>
                    <div className="arrow-container fade-in three">
                        <div className="arrow">
                            <h2> <Link to="aboutblock" spy={true} smooth={"easeInOutQuart"} duration={400} offset={-50}> <i className="fas fa-chevron-down"/> </Link></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <Avatar src={require("./../images/avatar.png")} variant="center fade-in two"/>
            </div>
        </div>
    </Element>;

const socialMediaLinks = [
    {
        link: "https://www.linkedin.com/in/roshan-kumaraswamy/",
        color: '#0077B5',
        i: <i className="fab fa-linkedin-in"/>
    },
    {
        link: "https://github.com/roshie548/",
        color: '#fc6d26',
        i: <i className="fab fa-github"/>
    },
    {
        link: "https://www.instagram.com/roshan.k_/",
        color: '#E1306C',
        i: <i className="fab fa-instagram"/>
    },
    {
        link: "https://medium.com/@roshie548",
        color: '#00ab6c',
        i: <i className="fab fa-medium-m"/>
    }
];

function getLinkStyle(color) {
    return {
        color: 'rgba(0, 0, 0, .25)',
        font_size: '25px',
        padding_top: '7px',
        padding_bottom: '7px',
        ':hover': {
            color: color,
            transform: 'translate(0, -5px)',
            transition: 'color .1s, transform .1s ease-in-out',
        }
    }
}

const listItems = socialMediaLinks.map((item) =>
    <SocialMediaLink link={item.link} style={getLinkStyle(item.color)} i={item.i}/>
);

export default MainBlock;