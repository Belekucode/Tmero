import React from 'react';
import Testimonial from '../slider/Testimonial';

const TestimonialOne = () => {
    return (
        <>
            <section className="testimonial-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map-2" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-4 col-lg-5 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our testimonials</span>
                                    <h2>What they’re <br />saying about our <br />courses</h2>
                                    <div className="text">Discover how our courses have positively impacted families, helping children thrive in their languages and deepen their cultural connections.</div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-xl-8 col-lg-7 col-md-12">
                            <div className="carousel-outer">
                                <div className="testimonial-carousel">
                                    {/* Testimonial Block */}
                                    <Testimonial/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialOne;