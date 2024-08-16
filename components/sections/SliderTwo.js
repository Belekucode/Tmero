import React, {useState} from 'react';

const SliderOne = () => {


    return (
        <div className="banner-wrapper">
            <section className="banner-two banner-carousel__two no-dots">
                    <div className="banner-two__slide banner-two__slide-two">
                        <div className="container">
                            <div className="banner-two__bubble-1"></div>
                            <div className="banner-two__bubble-2"></div>
                            <div className="banner-two__bubble-3"></div>
                            <img src="/images/main-slider/icon/shape-1.png" alt="" className="banner-two__scratch" />
                            <img src="/images/main-slider/image-2.jpg" className="banner-two__person" alt="" />
                            <div className="row no-gutters">
                                <div className="col-xl-8 z-index-1">
                                    <h1 className="banner-two__title banner-two__light-color">The best <br /> program to <span className="style-font">enroll</span> <br />for exchange</h1>
                                    <p className="banner-two__tag-line">are you ready to learn?</p>
                                    <a href="/page-courses" class="theme-btn btn-style-one bg-theme-color2">Find Course</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}
export default SliderOne;