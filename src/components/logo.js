import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            // <div>
            <Link to="/" className="logo">{this.props.label}</Link>
            // </div>
        )
    }
}

export default Logo;