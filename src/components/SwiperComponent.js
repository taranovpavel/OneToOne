import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
import classes from "./SwaiperComponent.module.css";
const SwiperComponent = ({image1,image2,image3}) => {
    return (
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            modules={[ Pagination, Scrollbar, ]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={classes.mySwiper}
        >
            <SwiperSlide className={classes.image} style={{backgroundImage:`url(${image1})`}}/>
            <SwiperSlide className={classes.image} style={{backgroundImage:`url(${image2})`}}/>
            <SwiperSlide className={classes.image} style={{backgroundImage:`url(${image3})`}}/>
        </Swiper>
    );
};

export default SwiperComponent;