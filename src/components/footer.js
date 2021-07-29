import React, { Component } from 'react';
// import LocomotiveScroll from "locomotive-scroll";
import SocialItem from './social.js';
import {Facebook, Twitter, Instagram} from 'feather-icons'

class Footer extends Component {
    render() {
        return (
            <Footer className="Footer">
                <div className="top">
                    <div className="social-icons">
                        <ul>
                            <SocialItem path="#" icon={<Facebook />} />
                            <SocialItem path="#" icon={<Instagram />} />
                            <SocialItem path="#" icon={<Twitter />} />
                        </ul>
                    </div>
                    <div className="address">
                        <span>
                            No. 3, Whitberry Lane, Leicester, UK.
                        </span>
                        <span>
                            ask@sapphire.com | +234 0000 000 000
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <span>
                        All Rights Reserved &copy; 2021 Sapphire
                    </span>
                </div>
            </Footer>
        )
    }
}

export default Footer;