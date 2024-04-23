import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";
const SwiperComponent = ({photos,swiperClasses = "swiper", imageClasses = "image", autoplay= false}) => {
    let newPhotos = []
    for(const key in photos){newPhotos.push(key)}
    console.log(newPhotos)
    return (
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={autoplay?[ Pagination, Scrollbar, Autoplay ]:[Pagination, Scrollbar]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={swiperClasses}
        >
            {newPhotos.map((item,idx)=>
                <SwiperSlide className={imageClasses} key={idx} style={{backgroundImage: `url(${photos[item]})`}} />
            )}
        </Swiper>
    );
};

export default SwiperComponent;