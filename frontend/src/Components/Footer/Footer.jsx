import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>FASHION BD</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>COPYRIGHT&copy;2023 <span className="colorChange">FASHION BD</span>, ALL RIGHT RESERVED. DESIGNED & DEVLOPED BY <span className="colorChange">MD. AL-AMIN</span></p>
                {/* <p>
                    copyright&copy;2023 <a href="#">ecstasy bd</a>, all right
                    reserved. designed & devloped by <a href="#">md. al-amin</a>
                </p> */}
            </div>
        </div>
    )
}
export default Footer;