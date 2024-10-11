import Link from 'next/link';
import React from 'react';
import PopularCourses from '../slider/PopularCourses';

const CourseOne = () => {
    return (
        <>
            <section className="courses-section">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-e wow zoomIn" />
                    </div>
                    <div className="sec-title">
                        <span className="sub-title">popular courses</span>
                        <h2>Pick a course to<br /> get started your study</h2>
                    </div>
                    <div className="carousel-outer">
                        {/* Courses Carousel */}
                        <div className="courses-carousel position-relative default-nav">
                            <PopularCourses />
                        </div>
                    </div>
                    <div className="bottom-text">
                        <div className="content">
                            <strong>Countless</strong> more courses you can explore <Link href="/page-courses" className="theme-btn btn-style-one small">Explore All Courses</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseOne;