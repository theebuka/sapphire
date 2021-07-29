import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
import { Link } from 'react-router-dom';

class Navitem extends Component {
    render() {
        return (
            <Link to={this.props.path}>{this.props.label}</Link>
        )
    }
}

export default Navitem;