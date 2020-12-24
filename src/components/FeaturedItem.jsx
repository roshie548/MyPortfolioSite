import React from 'react';
import '../css/FeaturedItem.scss'
import ScrollAnimation from "react-animate-on-scroll";

class FeaturedItem extends React.Component {
    render() {
        let opacity = this.props.isProject ? "heavy" : "light"
        return (
            <div className={"overlaid"}>
                <ScrollAnimation animateIn="fade-in" animateOnce={true} offset={100}>
                    <div className={"preview round"} style={this.props.style}>
                        <div className="flexbox-centering">
                            <div className={"color round " + opacity}/>
                            {this.props.img &&
                                <img src={this.props.img} style={{verticalAlign: 'middle'}}/>
                            }
                        </div>
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