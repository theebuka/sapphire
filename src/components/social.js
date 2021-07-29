import React, { Component } from 'react';

class SocialItem extends Component {
    render() {
        return (
            <li className="social-item">
                <a href={this.props.path} target="_blank" rel="noopener noreferrer">
                    {this.props.icon}
                </a>
            </li>
        )
    }
};

export default SocialItem;
