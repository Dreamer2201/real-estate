import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHouses } from '../../redux/api/housesAPI';
import HouseItem from './HouseItem';
import styles from './housesList.module.scss'


export default function HousesList() {

    const houses = useSelector(({ houses }) => houses.houses)

    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getAllHouses());
    }, [dispatch]);   


    const elements = houses.map((item) => {
         return (<HouseItem key={item._id} house={item} />)
    });
    
    return (
        <div>
            <ul className={styles.housesList}> {elements}</ul>
        </div>
    )
}
