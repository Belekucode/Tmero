import Link from 'next/link';
import React from 'react';
import CounterUp from '../elements/CounterUp';

const AboutThree = () => {
    return (
        <>
            <section className="about-section-three pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="anim-icons">
                                    <span className="icon icon-dots-5 bounce-x" />
                                    <span className="icon icon-dots-3 bounce-y" />
                                    <span className="icon icon-star-2 spin-one" />
                                </div>
                                <div className="sec-title">
                                    <span className="sub-title">About the company</span>
                                    <h2>Over 36 years in distant learning for skills</h2>
                                    <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend molestie metus pharetra eleifend.</div>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="icon fa fa-book" /> Flexible unlimited training programs</li>
                                    <li><i className="icon fa fa-book" /> Experience &amp; qualified teachers</li>
                                    <li><i className="icon fa fa-book" /> Free incoming lessons</li>
                                </ul>
                                <div className="btn-box">
                                    <div className="info-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-cup-1" />
                                            <div className="count-box">+
                                            {/* <span className="count-text" data-speed={5000} data-stop={29}>0</span> */}
                                            <CounterUp className="count-text" count={29} time={3} />
                                            </div>
                                        </div>
                                        <h6 className="counter-title">Wonderful awards</h6>
                                    </div>
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    <span className="float-icon icon-arrow" />
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="anim-icons">
                                    <span className="icon icon-percent bounce-y" />
                                    <span className="icon icon-star-1 spin-one" />
                                    <span className="icon icon-dots-4 bounce-x" />
                                    <span className="icon icon-wave" />
                                    <span className="icon icon-idea bounce-y" />
                                </div>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about-4.png" title="Tmero" /></figure>
                                <div className="author-info bounce-x">
                                    <h3 className="name">Aleesha brown</h3>
                                    <span className="designation">Maths teacher</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutThree;