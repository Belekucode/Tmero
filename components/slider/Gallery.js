import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Gallery = () => {

    const data = [
        {
            img: "gallery-1.jpg",
        },
        {
            img: "gallery-2.jpg",
        },
        {
            img: "gallery-3.jpg",
        },
        {
            img: "gallery-1.jpg",
        },
        {
            img: "gallery-2.jpg",
        },
        {
            img: "gallery-3.jpg",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="gallery-item">
                            <a href="#" className="lightbox-image">
                                <img src={`images/resource/${item.img}`} title="Tmero" />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Gallery;

