import Link from 'next/link';
import React from 'react';

const NewsOne = () => {
    const data = [
        {
            img: "news-1.jpg",
            title: "The quality role of the elementary teacher in education",
            comment: 10
        },
        {
            img: "news-2.jpg",
            title: "The quality role of the elementary teacher in education",
            comment: 10
        },
        {
            img: "news-3.jpg",
            title: "The quality role of the elementary teacher in education",
            comment: 10
        }
    ];
    return (
        <>
            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">directly from blog</span>
                        <h2>Our latest news &amp;<br /> upcoming blog posts</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/news-details"><img src={`images/resource/${item.img}`} title="Edulrns" /></Link></figure>
                                        <span className="date"><b>20</b> SEP</span>
                                    </div>
                                    <div className="content-box">
                                        <div className="content">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user" /> by Admin</li>
                                                <li><i className="fa fa-comments" /> {item.comment} Comments</li>
                                            </ul>
                                            <h4 className="title"><Link href="/news-details">{item.title}</Link></h4>
                                            <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsOne;