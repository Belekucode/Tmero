import React, {useState} from 'react';

const SliderOne = () => {


    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">
                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img src="/images/slider-1-scratch.png" alt="" className="banner-one__scratch" />
                            <img src="/images/main-slider/east-african-family.webp" className="banner-one__person" alt="" />  {/*image-1 */}
                            <div className="row no-gutters">
                                <div className="col-xl-12 z-index-1">
                                    <h1 className="banner-one__title banner-one__light-color">Best <span className="style-font">online</span> <br />courses from <br />Tmero</h1>
                                    <p className="banner-one__tag-line">are you ready to learn?</p>
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