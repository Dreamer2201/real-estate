import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './housesItem.module.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function SliderImgsHouse({arrImgs}) {

   return (
    <div className={styles.sliderWrapper}>
          <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
            {arrImgs.map(imgUrl => {
                  console.log(imgUrl)
                  return <SwiperSlide>
                            <img 
                            // className={styles.imgHouse} 
                            src= {`http://localhost:4000/${imgUrl}`} alt='house' width="100" height="100"/>
                        </SwiperSlide>
            })}
          </Swiper>
        </div>
  )
}
