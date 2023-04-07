import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { getHouseById } from '../../redux/api/housesAPI';
import styles from './housesItem.module.scss'
import { Link } from 'react-router-dom';
import SliderImgsHouse from './SliderImgsHouse';

export default function HouseItem({house}) {
    const { _id, imgs, title, total_area, bedrooms_quantity, kitchen } = house;

    const arrImgs = imgs;

    const dispatch = useDispatch()

    return (
        
        <li className={styles.containerItem}>
            <Link to={`/houses/${_id}`} className={styles.linkItem} onClick={() => dispatch(getHouseById(_id))}>
            <div className={styles.thumbImg}>
            <img className={styles.imgHouse} src= {`http://localhost:4000/${imgs[0]}`} alt='house'/>
            </div>
                <div className={styles.containerDiscr}>
                    <h2 className={styles.titleHouse}>{title}</h2>
                    <ul className={styles.listDiscr}>
                        <li><p className={styles.textDiscr}>Area: {total_area} m2 </p></li>
                        <li><p className={styles.textDiscr}>Bedrooms: {bedrooms_quantity} </p></li>
                    </ul>
                    {/* <button type='button' onClick={() => dispatch(getHouseById(_id))} >Details</button></Link> */}
                </div>
            </Link>
        </li>
        
    )
}
