import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    const data = [
        {
            img: "testi-thumb-1.jpg",
            title: "Jame sickres",
            desig: "Market Manager"
        },
        {
            img: "testi-thumb-2.jpg",
            title: "Jame sickres",
            desig: "Market Manager"
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Aleesha brown",
            desig: "Market Manager"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
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
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className=""
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block">
                        <div className="inner-box">
                            <div className="content-box">
                                <figure className="thumb"><img src={`images/resource/${item.img}`} title="Edulrns" /></figure>
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                <div className="text">Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.</div>
                                <div className="info-box">
                                    <span className="icon-quote" />
                                    <h4 className="name">{item.title}</h4>
                                    <span className="designation">{item.desig}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonial;

