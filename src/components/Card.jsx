import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {useMediaQuery} from "react-responsive";
import '../css/Card.scss'

const Card = (props) => {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const animation = isMobile ? "fade-in" : "fade-right";

    return (
        <ScrollAnimation animateIn={animation + " description round"} animateOnce={true} offset={50} delay={isMobile ? 100 : 0}>
            <div className={"container"}>
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
                <h4>{props.children}</h4>
            </div>
        </ScrollAnimation>
    );
}

export default Card;