import React from 'react'
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../redux/auth/userSlise';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../images/house4/1.jpg'
import img2 from '../images/house1/1.jpg'
import img3 from '../images/house2/3.jpg'
import img4 from '../images/house3/2.jpg'

import { ThumbImg, StyledImg } from './StylesBgSlider';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { MainContentHomePage, TitleHomePage } from './StyledHomePage';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Advantages from '../components/advantages/Advantages';
import News from '../components/news/News';

export default function HomePage() {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  console.log(isAuth);
  console.log(email);

  return (
    <MainContentHomePage>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
      }}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ThumbImg>
          <StyledImg src={img1} alt="bg"/>
        </ThumbImg>
      </SwiperSlide>
      <SwiperSlide>
        <ThumbImg>
          <StyledImg src={img2} alt="bg"/>
        </ThumbImg>
      </SwiperSlide>
      <SwiperSlide>
        <ThumbImg>
          <StyledImg src={img3} alt="bg"/>
        </ThumbImg>
      </SwiperSlide>
      <SwiperSlide>
        <ThumbImg>
          <StyledImg src={img4} alt="bg"/>
        </ThumbImg>
      </SwiperSlide>
    </Swiper>
        {isAuth ? <button type='button' onClick={() => dispatch(removeUser())}>Log out</button> : <></>}
      <Advantages />
      <TitleHomePage>News</TitleHomePage>
      <News />
    </MainContentHomePage>
  )
}
