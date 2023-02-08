import React from 'react';
import { testimonials } from '../data';
import { OpinionCard } from '../UI/Card';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay } from 'swiper';
import "swiper/css/autoplay";

import "../sass/main.scss"

const Testimonials = () => {
    return (
        <section className='container testimonials'>
            <h1 className='testimonials__header'>What the People Thinks About Us</h1>
            <div className='testimonials__container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 }

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    className="mySwiper"
                >
                    {
                        testimonials.map(({ name, adress, quote, avatar}, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <OpinionCard name={name} adress={adress} quote={quote} avatar={avatar} />
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials