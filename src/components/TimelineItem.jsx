import React from 'react';
import './../css/TimelineItem.css'

class TimelineItem extends React.Component {
    render () {
        return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{background: this.props.color}}> {this.props.type} </span>
                <time>{this.props.time}</time>
                <p> {this.props.desc} </p>
                <a href={this.props.link} target="_blank"> {this.props.linkText} </a>
                <span className="circle"/>
            </div>
        </div>);
    }
}

export default TimelineItem