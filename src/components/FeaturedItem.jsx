import React from 'react';
import '../css/FeaturedItem.scss'
import ScrollAnimation from "react-animate-on-scroll";

class FeaturedItem extends React.Component {
    render() {
        return (
            <div className="overlaid">
                <ScrollAnimation animateIn="fade-in" animateOnce={true}>
                    <div className="preview round" style={this.props.style}>
                        <img src={this.props.img} style={{verticalAlign: 'middle'}}/>
                    </div>
                </ScrollAnimation>
                <div className="position">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FeaturedItem