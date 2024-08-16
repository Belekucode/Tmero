import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="top-left">
                                <div className="text">First 20 students get 50% discount. Hurry up!</div>
                            </div>
                            <div className="top-right">
                                <ul className="useful-links">
                                    <li><Link href="#">Login</Link></li>
                                    <li><Link href="#">Register</Link></li>
                                </ul>
                                <ul className="social-icon-one light">
                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><span className="fab fa-facebook-square" /></Link></li>
                                    <li><Link href="#"><span className="fab fa-pinterest-p" /></Link></li>
                                    <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><Image src={LogoWhite} title='Edulrns' /></Link></div>
                            </div>
                            <ul className="contact-info-outer">
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Call Anytime</span>
                                        <Link href="tel:+92880098670" className="text">+ 98 (000) - 9630</Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Send Email</span>
                                        <Link href="/mailto:ambed@company.com" className="text">ambed@company.com</Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">380 ST KildLink Road</span>
                                        <div className="text">Melbourne, Australia</div>
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        {/* Main box */}
                        <div className="main-box">
                            {/*Nav Box*/}
                            <div className="nav-outer">
                                <nav className="nav main-menu">
                                    <NavLinks extraClassName="header2" />
                                </nav>
                                {/* Main Menu End*/}
                                <div className="outer-box">
                                    <div className="ui-btn-outer">
                                        <button className="ui-btn ui-btn search-btn" onClick={handleToggle}>
                                            <span className="icon lnr lnr-icon-search" />
                                        </button>
                                        <Link href="#" className="ui-btn"><i className="lnr-icon-shopping-cart" /></Link>
                                    </div>
                                    <Link href="/page-contact" className="theme-btn btn-style-two"><span className="btn-title">Try For Free</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* End Main Box */}
                    </div>
                </div>
                {/* Header Lower */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    {/*Here Menu Will Come Automatically ViLink Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoDark} title='Edulrns' /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fLink fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" title><Image src={LogoWhite} title='Edulrns' /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>
            {/*End Main Header */}



        </>
    );
};

export default Header2;