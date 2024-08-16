import Link from 'next/link';
import React from 'react';

const MapOne = () => {
    return (
        <>
            <section className="map-section">
                <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe>
                <div className="branches-outer">
                    <div className="auto-container">
                        <div className="row">
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">New York</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Washington DC</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Las Vegas</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapOne;