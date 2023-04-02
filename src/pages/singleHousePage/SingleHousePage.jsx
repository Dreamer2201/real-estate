import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleHouse from '../../components/houses/SingleHouse';
// import { WrapperSinglePage, ThumbSwiper, ThumbImg, StyledImg } from './StyledSingleHousePage';


export default function SinglePage() {

  const house = useSelector(({ houses }) => houses.houseDetails)

  const navigate = useNavigate('/');

  const goBackHomePage = () => navigate('/');
  const goBackHousesPage = () => navigate('/houses');


  return (
    <>
      <button type="button" onClick={goBackHomePage}>home page</button>
      <button type="button" onClick={goBackHousesPage}>houses list</button>
      {house ? <SingleHouse house={house} /> : <p>Something went wrong</p>}
      {/* <WrapperSinglePage>
        <ThumbSwiper>
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
            <StyledImg src={img1} alt="house foro"/>
          </ThumbImg>
        </SwiperSlide>
        <SwiperSlide>
          <ThumbImg>
            <StyledImg src={img2} alt="house foro"/>
          </ThumbImg>
        </SwiperSlide>
        <SwiperSlide>
          <ThumbImg>
            <StyledImg src={img3} alt="house foro"/>
          </ThumbImg>
        </SwiperSlide>
        <SwiperSlide>
          <ThumbImg>
            <StyledImg src={img4} alt="house foro"/>
          </ThumbImg>
        </SwiperSlide>
        <SwiperSlide>
          <ThumbImg>
            <StyledImg src={imgPlan1} alt="house plan"/>
          </ThumbImg>
        </SwiperSlide>
        <SwiperSlide>
          <ThumbImg>
            <StyledImg src={imgPlan2} alt="house plan"/>
          </ThumbImg>
        </SwiperSlide>
        </Swiper>
        </ThumbSwiper>
        <HouseDetails>
          Description:
        </HouseDetails>
      </WrapperSinglePage> */}
    </>
  )
}
