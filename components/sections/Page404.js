import Link from 'next/link';
import React from 'react';

const AboutFive = () => {
    return (
        <>
        <section>
            <div className="auto-container pt-100 pb-150">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="error-page__inner">
                            <div className="error-page__title-box">
                                <img src="/images/resource/404.jpg" title='Oitech' />
                                <h3 className="error-page__sub-title">Page not found!</h3>
                            </div>
                            <p className="error-page__text">Sorry we can't find that page! The page you are looking  for
                                was never existed.</p>
                            <form className="error-page__form" action="#">
                                <div className="error-page__form-input">
                                    <input type="search" placeholder="Search here" />
                                    <button type="submit"><i className="lnr lnr-icon-magnifier"></i></button>
                                </div>
                            </form>
                            <Link href="/" className="theme-btn btn-style-one shop-now"><span className="btn-title">Back to Home</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
};

export default AboutFive;