import React, { useState, useEffect } from 'react';
import { OpinionCard } from '../UI/Card';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay } from 'swiper';
import "swiper/css/autoplay";

import "../sass/components/testimonials.scss"

const Testimonials = () => {

    // const [comment, setComment] = useState();

    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            const res = await fetch("https://63f4c6232213ed989c4a222e.mockapi.io/comments")
            const data = await res.json()
            setAllComments(data)
        }
        getComments()
    }, [])

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
                        allComments.map(({ ...element }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <OpinionCard 
                                    name={element.name} 
                                    city={element.city} 
                                    country={element.country} 
                                    quote={element.quote} 
                                    avatar={element.avatar} 
                                    comment={element.comment}
                                    />
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