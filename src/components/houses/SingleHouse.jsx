import React from 'react'
import { useState } from 'react';
import styles from './sliderImages.module.scss'


export default function SingleHouse({house}) {

    const [isActive, setIsActive] = useState(0)

    const { imgs, title, total_area, bedrooms_quantity, holl, living_room, kitchen, wardrobe, bathroom_quantity, terrace, garage } = house;

    const handleRadio = (e) => {
        setIsActive(e.target.value)
    }

    return (
        <>
        {house && 
            <section>
                <div class="container">
                    <div class="carousel">
                    {imgs && imgs.map((item, index) => {return <input type="radio" checked={isActive === index} name="slides" id={index} value={index} onChange={handleRadio} />})}
                    
                    <ul class="carousel__slides">
                
                    {imgs && imgs.map((itemUrl, index) => {
                        return <li className={styles.carousel__slide} key={index} >
                        <figure>
                            <div>
                            {imgs && imgs && <img src= {`http://localhost:4000/${itemUrl}`} alt='house' width="500" height="500"/>}
                            </div>
                                <figcaption>
                                    <span>{title}</span>
                                            <p>Total area: {total_area} m2 </p>
                                            <p>Bedrooms: {bedrooms_quantity} </p>
                                            <p>Holl: {holl} m2 </p>
                                            <p>Living room: {living_room} m2 </p>
                                            <p>Kitchen: {kitchen} m2 </p>
                                            <p>Wardrobe: {wardrobe} m2 </p>
                                            <p>Bathrooms: {bathroom_quantity}</p>
                                            <p>Terrace: {terrace} m2 </p>
                                            <p>Garage: {garage} m2 </p>
                                        </figcaption>
                                </figure>
                            </li>
                            })}
                    </ul>

                    <ul class="carousel__thumbnails">
                        {imgs && imgs.map((itemUrl, index) => {
                            return <li key={index}>
                            <label htmlFor={index}><img src={`http://localhost:4000/${itemUrl}`} alt="" onChange={handleRadio} /></label>
                        </li>
                        })}
                    </ul>

                    </div>
                </div>
            </section>
            }
            </>
)}