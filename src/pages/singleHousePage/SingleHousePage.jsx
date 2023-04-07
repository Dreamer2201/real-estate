import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHouseById } from '../../redux/api/housesAPI';
import SliderImgsHouse from '../../components/houses/SliderImgs';
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

    const dispatch = useDispatch()

    const id = house._id

    useEffect(() => {
        dispatch(getHouseById(house.id));
    }, [id]); 

  const navigate = useNavigate('/');

  const goBackHomePage = () => navigate('/');
  const goBackHousesPage = () => navigate('/houses');


  return (
    <>
      <button type="button" onClick={goBackHomePage}>home page</button>
      <button type="button" onClick={goBackHousesPage}>houses list</button>
      {house ? <SliderImgsHouse house={house} /> : <p>Something went wrong</p>}
    </>
  )
}
