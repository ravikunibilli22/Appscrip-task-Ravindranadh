import { Component } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import './index.css'

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="footer">
                    <div className="footer-container-1">
                        <div className="first-container">
                            <h2 className="all">Be the first to know</h2>
                            <p className="all">Sign up for updates from mettā muse.</p>
                            <input 
                            type="search"
                            placeholder="enter your e-mail..."
                            id="searc"
                            />
                            <label>
                                <p className="all" id="searc">SUBSCRIBE</p>
                                
                            </label>
                        </div>
                        <div className="contact-container">
                            <h3 className="all">CONTACT US</h3>
                            <p className="all">+44 221 133 5360</p>
                            <p className="all">customercare@mettamuse.com</p>
                            <h3 className="all">Currency</h3>
                            <img src="https://i.postimg.cc/pTq5s7m1/United-States-of-America-US.png" alt="usa" />
                            <img src="https://i.postimg.cc/dQhS8KkX/Star-1.png" alt="star" />
                            <h2 className="all">USD</h2>
                            <p className="all">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                    <hr className="footer-hr" color="white"/>
                    <div className="footer-container-2">
                        <div className="footer-2-sec1">
                            <h3 className="all">mettā muse</h3>
                            <p className="all">About Us</p>
                            <p className="all">Stories</p>
                            <p className="all">Artisans</p>
                            <p className="all">Boutiques</p>
                            <p className="all">Contact Us</p>
                            <p className="all">EU Compliances Docs</p>
                        </div>
                        <div className="footer-2-sec2">
                            <h3 className="all">Quick Links</h3>
                            <p className="all">Orders & Shipping</p>
                            <p className="all">Join/Login as a Seller</p>
                            <p className="all">Payment & Pricing</p>
                            <p className="all">Return & Refunds</p>
                            <p className="all">FAQs</p>
                            <p className="all">Privacy Policy</p>
                            <p className="all">Terms & Conditions</p>
                        </div>
                        <div className="footer-2-sec3">
                            <div>
                                <h3 className="all">FOLLOW US</h3>
                                <FaInstagram className="all" />
                                <FaLinkedin className="all"/>
                            </div>
                            <div>
                                <h3 className="all">mettā muse Accepts</h3>
                                <div>
                                    <img src="https://i.postimg.cc/qq4y4vMm/Group-136188.png" alt="bank-1" />
                                    <img src="https://i.postimg.cc/G3KsvrpC/Group-136189.png" alt="bank-2" />
                                    <img src="https://i.postimg.cc/vBMc6SFT/Group-136192.png" alt="bank-3" />
                                    <img src="https://i.postimg.cc/Y2dhh3X2/Group-136193.png" alt="bank-4" />
                                    <img src="https://i.postimg.cc/RFMZ06Kn/Group-136194.png" alt="bank-5" />
                                    <img src="https://i.postimg.cc/prrVDw0W/Group-136195.png" alt="bank-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="ending">Copyright © 2023 mettamuse. All rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer