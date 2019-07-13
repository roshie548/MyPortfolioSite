import React from 'react';
import './../css/SquareImage.css'

class SquareImage extends React.Component {
    render() {
        return <img src={this.props.src} className={this.props.fade} style={{width:'100%'}}/>
    }
}

export default SquareImage;