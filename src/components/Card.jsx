import React from 'react';
import '../css/Card.scss'
import ScrollAnimation from "react-animate-on-scroll";

class Card extends React.Component {
    render() {
        return (
            <ScrollAnimation animateIn="fade-right description round" animateOnce={true} offset={50}>
                <div className={"container"}>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.role}</h3>
                    <h4>{this.props.children}</h4>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Card;