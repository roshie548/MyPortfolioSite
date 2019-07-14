import React from 'react'
import './../css/MainBlock.css'
import Avatar from "./Avatar";
import SocialMediaLink from "./SocialMediaLink";

const MainBlock = () =>
    <div className="wrapper">
        <div className="main-block center">
            <div className="banner-text fade-in two">
                <Avatar src={require("./../images/avatar.png")} variant="center fade-in one"/>
                <h2>Hey there,</h2>
                <h1>I'm Roshan!</h1>
                <div className="links fade-in three">
                    {listItems}
                </div>
            </div>
        </div>
    </div>;

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
        color: '#e1306c',
        i: <i className="fab fa-instagram"/>
    },
    {
        link: "https://medium.com/@roshie548",
        color: '#00ab6c',
        i: <i className="fab fa-medium-m"/>
    }
];

const listItems = socialMediaLinks.map((item) =>
    <SocialMediaLink link={item.link} color={item.color} i={item.i}/>
);

export default MainBlock;