import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import LocomotiveScroll from "locomotive-scroll";
// import Navigation from './../components/navigation.js';
import Image from './../images/img (2).jpg';
import ProductCard from './../components/product-card';

class Home extends Component {
    render() {
        return (
            <section className="Home page">
                <span>hello</span>
                <ProductCard src={Image} alt="trendy handbag for women" title="Louis Vuitton" body="Chick, elegant. Made for the modern woman." />
            </section>
        )
    }
}

export default Home;