import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
import { ArrowRight } from 'feather-icons';
// import { Link } from 'react-router-dom';

class ProductCard extends Component {
    /* componentDidMount() {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".product-card"),
            smooth: true
        });
    } */
    render() {
        return (
            <div className="product-card">
                <div className="image-container" data-scroll>
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
                <div className="text-container">
                    <div>
                        <h3 data-scroll>{this.props.title}</h3>
                        <span data-scroll>{this.props.body}</span>
                    </div>
                    <div>
                        <a href="google.com">
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;