import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const PopularCourses = () => {

    const data = [
        {
            img: "course-1.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-2.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-3.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-4.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-2.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".owl-prev-course-1",
                    nextEl: ".owl-next-course-1",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        // spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        // spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                }}
                className=""
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href="/page-course-details">
                                            <img src={`/images/resource/${item.img}`} title="Edulrns" />
                                        </Link>
                                    </figure>
                                    <span className="price">${item.price}</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book" /> {item.lesson} Lessons</li>
                                        <li><i className="fa fa-users" /> {item.students} Students</li>
                                    </ul>
                                    <h5 className="title"><Link href="/page-course-details">{item.title}</Link></h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock" /> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div class="owl-nav">
                <div class="owl-prev owl-prev-course-1">
                    <span class="fa fa-long-arrow-alt-left"></span>
                </div>
                <div class="owl-next owl-next-course-1">
                    <span class="fa fa-long-arrow-alt-right"></span>
                </div>
            </div>

        </>
    );
};

export default PopularCourses;

