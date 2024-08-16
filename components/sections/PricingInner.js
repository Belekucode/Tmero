import Link from 'next/link';
import React from 'react';

const PricingOne = () => {
    return (
        <>
            <section className="pricing-section">
                <div className="anim-icons">
                    <span className="icon icon-group-1 bounce-y" />
                    <span className="icon icon-group-2 bounce-y" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$20.00</h1>
                                    <span className="title">basic pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrate options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose Plan</span></Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$30.00</h1>
                                    <span className="title">medium pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrate options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/page-pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose Plan</span></Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$40.00</h1>
                                    <span className="title">premium pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrate options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/page-pricing" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Choose Plan</span></Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingOne;