import React from 'react';
import CountDown2 from '../elements/CountDown2';

const SignupTwo = () => {
    const fixDate = new Date();
    return (
        <>
            <section className="signup-section-two">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-line-1 spin-one" />
                        <span className="icon icon-line-2 spin-one" />
                        <span className="icon icon-line-3 bounce-x" />
                        <span className="icon icon-square spin-one" />
                        <span className="icon icon-triangle spin-one" />
                        <span className="icon icon-dots-2 bounce-y" />
                        <span className="icon icon-dots-6 spin-one" />
                    </div>
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-6 col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Register now get premium online courses for free!</h2>
                                    <div className="text">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat is simply free text available in the psutis sem nibh id eis sed odio sit amet.</div>
                                </div>
                                <CountDown2 addClass="time-counter-two"  endDateTime={fixDate.setDate(fixDate.getDate() + 15)}/>
                            </div>
                        </div>
                        {/* Form Column */}
                        <div className="form-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sign Form */}
                                <div className="signup-form-two wow fadeInLeft">
                                    <div className="title-box">
                                        <h4 className="title">Get free courses</h4>
                                    </div>
                                    {/*Contact Form*/}
                                    <form method="post" action="get" id="contact-form">
                                        <div className="form-group">
                                            <input type="text" name="full_name" placeholder="Your name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn btn-style-one bg-theme-color4" type="submit" name="submit-form">Apply Now</button>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupTwo;