import React from 'react';
import BlogSlider from '../slider/BlogSlider';

const NewsTwo = () => {
    return (
        <>
            <section className="news-section-two">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map-4" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-4 col-lg-4 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title mb-0">
                                    <span className="sub-title">directly from blog</span>
                                    <h2>Our latest news &amp; upcoming blog posts</h2>
                                    <div className="text">Quisque commodo, magna nec accu man euismod tellus mi ornare enim.</div>
                                </div>
                            </div>
                        </div>
                        {/* Carousel Column */}
                        <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                            <div className="carousel-outer">
                                <BlogSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsTwo;