import React from 'react';
import Radium from 'radium';

class SocialMediaLink extends React.Component {
    render() {
        return <a href={this.props.link} style={this.props.style} target={"_blank"}>{this.props.i}</a>
    }
}

SocialMediaLink = Radium(SocialMediaLink);

export default SocialMediaLink;