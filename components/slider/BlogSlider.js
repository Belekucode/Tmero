import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const BlogSlider = () => {

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
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="news-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href="/news-details">
                                            <img src={`images/resource/${item.img}`} title="Edulrns" /></Link>
                                    </figure>
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

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default BlogSlider;

