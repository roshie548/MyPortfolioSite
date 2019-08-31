import React from 'react';
import './../css/style.scss'
import './../css/SquareImage.css'
import ScrollAnimation from "react-animate-on-scroll";

class SquareImage extends React.Component {
    render() {
        return <ScrollAnimation animateIn="fade-in" delay={this.props.delay} animateOnce={true}><img src={this.props.src} style={{width:'100%'}} alt={'pic'}/></ScrollAnimation>
    }
}

export default SquareImage;