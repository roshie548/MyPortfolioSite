import React from 'react'
import '../css/Nav.scss'
import {Link} from "react-scroll/modules";

const Nav = () =>
    <nav>
            <li className="title" style={{marginRight: 'auto'}}><Link activeClass="none" to="mainblock" spy={true} smooth={"easeInOutQuart"} duration={400} > Roshan Kumaraswamy </Link> </li>
            <Link activeClass="active" to="mainblock" spy={true} smooth={"easeInOutQuart"} duration={400} > home </Link>
            <Link activeClass="active" to="aboutblock" spy={true} smooth={"easeInOutQuart"} duration={400} offset={-75} > about me </Link>
            <Link activeClass="active" to="featuredblock" spy={true} smooth={"easeInOutQuart"} duration={400} > work </Link>
            <Link activeClass="active" to="timeline" spy={true} smooth={"easeInOutQuart"} duration={400} > timeline </Link>
    </nav>;
export default Nav;