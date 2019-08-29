import React from 'react'
import '../css/Avatar.scss'
class Avatar extends React.Component {
    render() {
        return <img src={this.props.src} alt="avatar" className={this.props.variant + " Avatar"} />
    }
}

export default Avatar;