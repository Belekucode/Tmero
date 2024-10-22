import React from 'react';

const SignupOne = () => {
    return (
        <>
            <section className="signup-section">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-paper-clip bounce-x" />
                    </div>
                    <div className="outer-box" style={{ backgroundImage: 'url(./images/background/3.jpg)' }}>
                        <span className="float-icon icon-pencil-line wow fadeInUp" />
                        <div className="row">
                            {/* Title Column */}
                            <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title light">
                                    <h2>Sign up for a<br /> free trial lesson<br /> by zoom</h2>
                                    <div className="text">Discover engaging language learning that connects your child to culture, communication, and confidence.</div>
                                </div>
                            </div>
                            {/* Form Column */}
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Sign Form */}
                                    <div className="signup-form wow fadeInLeft">
                                        {/*Contact Form*/}
                                        <form method="post" action="get" id="contact-form">
                                            <div className="form-group">
                                                <input type="text" name="full_name" placeholder="Your name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="Email" placeholder="Email address" required />
                                            </div>
                                            <div className="form-group">
                                                <select className="custom-select">
                                                    <option value>Select course</option>
                                                    <option value="Amharic">Amharic</option>
                                                    <option value="Somali">Somali</option>
                                                    <option value="Tigrigna">Tigrigna</option>
                                                    <option value="Afaan Oromo">Afaan Oromo</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">Send Request</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupOne;