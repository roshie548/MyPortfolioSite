import React from 'react'
import '../css/Nav.scss'
import {Link} from "react-scroll/modules";

const Nav = () =>
    <nav>
            <li className="title" style={{marginRight: 'auto'}}><Link activeClass="none" to="mainblock" spy={true} smooth={"easeInOutQuart"} duration={400} > ROSHAN KUMARASWAMY </Link> </li>
            <Link activeClass="active" to="mainblock" spy={true} smooth={"easeInOutQuart"} duration={400} > HOME </Link>
            <Link activeClass="active" to="aboutblock" spy={true} smooth={"easeInOutQuart"} duration={400} > ABOUT ME </Link>
            <Link activeClass="active" to="featuredblock" spy={true} smooth={"easeInOutQuart"} duration={400} > WORK </Link>
            <Link activeClass="active" to="timeline" spy={true} smooth={"easeInOutQuart"} duration={400} > TIMELINE </Link>
    </nav>;
export default Nav;