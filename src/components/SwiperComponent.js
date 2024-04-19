import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
import classes from "./SwaiperComponent.module.css";
import Container from "./Container";
const SwiperComponent = ({swiperImages}) => {
    return (
        <Swiper
            effect={'autoplay'}
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            modules={[ Pagination, Scrollbar, Autoplay ]}
            autoplay={{ delay: 3500 }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={classes.mySwiper}
        >
            {swiperImages.map(item=>
                    <SwiperSlide key={item}>
                        <img src={item.url} alt=""/>
                    </SwiperSlide>
            )}
        </Swiper>
    );
};

export default SwiperComponent;