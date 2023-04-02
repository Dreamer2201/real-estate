import React from 'react'
import styles from './housesItem.module.scss'


export default function SingleHouse({house}) {

    const { _id, imgs, title, total_area, bedrooms_quantity, holl, living_room, kitchen, wardrobe, bathroom_quantity, terrace, garage } = house;

    console.log(house.title)
    console.log(house.imgs)


    return (
        <li className={styles.containerItem}>
                {imgs && <img className={styles.imgHouse} src= {`http://localhost:4000/${imgs[1]}`} alt='house' width="100" height="100"/>}
                {/* <img className={styles.imgHouse} src= {`http://localhost:4000/${imgs[1]}`} alt='house' width="100" height="100"/> */}
                <div>
                    <h2>{title}</h2>
                    <ul>
                        <li><p>Total area: {total_area} m2 </p></li>
                        <li><p>Bedrooms: {bedrooms_quantity} </p></li>
                        <li><p>Holl: {holl} m2 </p></li>
                        <li><p>Living room: {living_room} m2 </p></li>
                        <li><p>Kitchen: {kitchen} m2 </p></li>
                        <li><p>Wardrobe: {wardrobe} m2 </p></li>
                        <li><p>Bathrooms: {bathroom_quantity}</p></li>
                        <li><p>Terrace: {terrace} m2 </p></li>
                        <li><p>Garage: {garage} m2 </p></li>
                    </ul>
                </div>
        </li>
    )
}
