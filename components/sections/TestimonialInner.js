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