import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
const SwiperComponent = ({image1,image2,image3,swiperClasses = "swiper", imageClasses = "image"}) => {
    return (
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            modules={[ Pagination, Scrollbar, ]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={swiperClasses}
        >
            <SwiperSlide className={imageClasses} style={{backgroundImage:`url(${image1})`}}/>
            <SwiperSlide className={imageClasses} style={{backgroundImage:`url(${image2})`}}/>
            <SwiperSlide className={imageClasses} style={{backgroundImage:`url(${image3})`}}/>
        </Swiper>
    );
};

export default SwiperComponent;