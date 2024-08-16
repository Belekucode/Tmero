import Link from 'next/link';
import React from 'react';

const FeatureTwo = () => {
    return (
        <>
            <section className="features-section-two pt-0">
                <div className="anim-icons">
                    <span className="icon icon-shape-1 zoom-one" />
                    <span className="icon icon-shape-2 zoom-one" />
                    <span className="icon icon-e zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Advantages</span>
                        <h2>You’ve come to the right <br />place to learn</h2>
                    </div>
                    <div className="row">
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-1.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">135,00 courses</Link></h4>
                                <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-2.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">Industry instructors</Link></h4>
                                <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <figure className="image"><img src="images/resource/feature-3.png" title="Edulrns" /></figure>
                                <h4 className="title"><Link href="/page-about">Lifetime access</Link></h4>
                                <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureTwo;