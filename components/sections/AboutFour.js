import Link from 'next/link';
import React from 'react';
import CounterUp from '../elements/CounterUp';

const AboutFour = () => {
    return (
        <>
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Over 36 years in distant learning for skills</h2>
                                    <div className="text">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat is simply free text available in the psutis sem</div>
                                </div>
                                <div className="contact-info">
                                    <i className="icon fa fa-phone" />
                                    <h6 className="title">Have any question about donation?</h6>
                                    <div className="info">Call us now: <Link href="tel:6668880000">666 888 0000</Link></div>
                                </div>
                                <div className="counter-info-box">
                                    <div className="inner">
                                        <div className="count-box">
                                            {/* <span className="count-text" data-speed={5000} data-stop={5716}>0</span> */}
                                            <CounterUp className="count-text" count={5716} time={3} />
                                        </div>
                                        <div className="text">students enrolled in a digital classroom</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/about-5.jpg" title="Edulrns" /></figure>
                                    <div className="caption-box wow slideInRight">
                                        <div className="inner">
                                            <div className="icon"><i className="flaticon-study" /></div>
                                            <div className="text">Get your skills certificate from the edulerns online exam</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutFour;