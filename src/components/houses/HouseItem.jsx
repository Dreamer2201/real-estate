import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHouseById } from '../../redux/api/housesAPI';
import styles from './housesItem.module.scss'
import { Link } from 'react-router-dom';

export default function HouseItem({house}) {
    const { _id, imgs, title, total_area, bedrooms_quantity, kitchen } = house;

    const dispatch = useDispatch()

    return (
        <li className={styles.containerItem}>
                <img className={styles.imgHouse} src= {`http://localhost:4000/${imgs[1]}`} alt='house' width="100" height="100"/>
                <div>
                    <h2>{title}</h2>
                    <ul>
                        <li><p>Total area: {total_area} m2 </p></li>
                        <li><p>Bedrooms: {bedrooms_quantity} </p></li>
                        <li><p>Kitchen: {kitchen} m2 </p></li>
                    </ul>
                    <Link to={`/houses/${_id}`}><button type='button' onClick={() => dispatch(getHouseById(_id))} >Details</button></Link>
                </div>
        </li>
    )
}
