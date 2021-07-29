import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
// import { Link } from 'react-router-dom';
import Logo from './logo.js';
import Navitem from './navitem.js';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-list">
                    <li>
                        <Navitem path="/about" label="About" />
                    </li>
                    <li>
                        <Logo label="Sapphire." />
                    </li>
                    <li>
                        <Navitem path="/Shop" label="Shop" />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;