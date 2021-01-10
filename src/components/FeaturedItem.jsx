import React from 'react';
import '../css/FeaturedItem.scss'
import ScrollAnimation from "react-animate-on-scroll";
import Card from "./Card";

class FeaturedItem extends React.Component {
    render() {
        let opacity = this.props.isProject ? "heavy" : "light";
        let side = this.props.index % 2 === 0 ? "right" : "left";

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

                {this.props.isProject ? (
                    <div className="position">
                        <div className={"project-name " + side}>
                            {this.props.name}
                        </div>
                        <Card
                            technologies={this.props.technologies}
                            description={this.props.description}
                            side={side}
                        />
                        <div className={side}>
                            <div className={"tech-stack"}>
                                {this.props.technologies.map((text) => <div className={"technology"}>{text}</div>)}
                            </div>
                            <div className={"project-links"}>
                                <a href={this.props.ghLink} target={"_blank"}>
                                    <i className="fab fa-github"/>
                                </a>
                                <a href={this.props.projectLink}target={"_blank"}>
                                    <i className="fas fa-external-link-alt"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="position expandable">
                        <Card
                            name={this.props.name}
                            role={this.props.role}
                            description={this.props.description}
                        />
                    </div>)
                }
                </ScrollAnimation>
            </div>
        );
    }
}

export default FeaturedItem