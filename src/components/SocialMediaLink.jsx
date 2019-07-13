import React from 'react';

class SocialMediaLink extends React.Component {
    render() {
        return <a href={this.props.link} style={{color: this.props.color}} target={"_blank"}>{this.props.i}</a>
    }
}

export default SocialMediaLink;