import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image zoom-two" style={{ backgroundImage: 'url(./images/background/4.jpg)' }} />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><img src="images/logo-2.png" title="Edulrns" /></Link></div>
                                    <div className="text">Get 26,000+ best online courses from us</div>
                                    <ul className="social-icon-two">
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul className="user-links">
                                        <li><Link href="#">Gallery</Link></li>
                                        <li><Link href="#">News &amp; Articles</Link></li>
                                        <li><Link href="#">FAQ's</Link></li>
                                        <li><Link href="#">Sign In/Registration</Link></li>
                                        <li><Link href="#">Coming Soon</Link></li>
                                        <li><Link href="#">Contacts</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="user-links">
                                        <li><Link href="#">About</Link></li>
                                        <li><Link href="#">Courses</Link></li>
                                        <li><Link href="#">Instructor</Link></li>
                                        <li><Link href="#">Events</Link></li>
                                        <li><Link href="#">Instructor Profile</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li><i className="fa fa-phone-square" /> <Link href="tel:+926668880000">+92 (0088) 6823</Link></li>
                                            <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@potisen.com">needhelp@company.com</Link></li>
                                            <li><i className="fa fa-map-marker-alt" /> 80 Broklyn Golden Street. New York. USA</li>
                                        </ul>
                                        <div className="subscribe-form">
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                    <button type="button" className="theme-btn btn-style-one"><i className="fa fa-long-arrow-alt-right" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2022 by  <Link href="/">Company.com</Link></div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;