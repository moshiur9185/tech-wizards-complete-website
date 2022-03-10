import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "PC Repairs", link: "/repairs" },
        { name: "Data Recovery", link: "/checkup" },
        { name: "New PC Set Up", link: "/newPc" },
        { name: "Mac Repairs", link: "repairs" },
        { name: "Virus Removal", link: "/checkup" },
        { name: "IT Outsourcing", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "California - 202020 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const BusinessITSupport = [
        { name: "Scheduled maintenance", link: "/checkup" },
        { name: "Schedule a Service", link: "/checkup" },
        { name: "Remote Support", link: "/checkup" }

    ]
    const services = [
        { name: "PC Repairs", link: "/repairs" },
        { name: "Data Recovery", link: "/checkup" },
        { name: "New PC Set Up", link: "/newPc" },
        { name: "Mac Repairs", link: "repairs" },
        { name: "Virus Removal", link: "/checkup" },
        { name: "IT Outsourcing", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    return (
        <div className="footer-area py-5">
            <footer className="container ">
                <div className="row ">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Business IT Support" menuItems={BusinessITSupport} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon bg-white" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon bg-white" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Contact Now</h6>
                            <button className="btn btn-secondary">+5645245514</button>
                        </div>
                    </FooterCol>
                    <div className="mx-auto text-center ">
                        <p className="text-secondary">@Tech Wizards {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;