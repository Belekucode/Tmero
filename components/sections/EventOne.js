import Link from 'next/link';
import React from 'react';

const EventOne = () => {
    return (
        <>
            <section className="event-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map-3" />
                </div>
                <div className="auto-container">
                    <div className="sec-title-outer">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="sec-title">
                                    <span className="sub-title">Latest Events</span>
                                    <h2>Our Latest Upcoming<br /> Events List</h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/resource/event-1.jpg" title="Edulrns" /></figure>
                                        <span className="date">20 <br /> May</span>
                                    </div>
                                    <h5 className="title"><Link href="#">Starting seo as your home based business</Link></h5>
                                    <ul className="post-info">
                                        <li><i className="icon lnr-icon-history" /><span>Time:</span> 11:00am 02:00pm</li>
                                        <li><i className="icon lnr-icon-location" /><span>Location:</span> England</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/resource/event-2.jpg" title="Edulrns" /></figure>
                                        <span className="date">20 <br /> May</span>
                                    </div>
                                    <h5 className="title"><Link href="#">Starting seo as your home based business</Link></h5>
                                    <ul className="post-info">
                                        <li><i className="icon lnr-icon-history" /><span>Time:</span> 11:00am 02:00pm</li>
                                        <li><i className="icon lnr-icon-location" /><span>Location:</span> England</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/resource/event-3.jpg" title="Edulrns" /></figure>
                                        <span className="date">20 <br /> May</span>
                                    </div>
                                    <h5 className="title"><Link href="#">Starting seo as your home based business</Link></h5>
                                    <ul className="post-info">
                                        <li><i className="icon lnr-icon-history" /><span>Time:</span> 11:00am 02:00pm</li>
                                        <li><i className="icon lnr-icon-location" /><span>Location:</span> England</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/resource/event-4.jpg" title="Edulrns" /></figure>
                                        <span className="date">20 <br /> May</span>
                                    </div>
                                    <h5 className="title"><Link href="#">Starting seo as your home based business</Link></h5>
                                    <ul className="post-info">
                                        <li><i className="icon lnr-icon-history" /><span>Time:</span> 11:00am 02:00pm</li>
                                        <li><i className="icon lnr-icon-location" /><span>Location:</span> England</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventOne;