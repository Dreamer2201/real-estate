import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './sliderImages.module.scss'

export default function SliderImgsHouse({house}) {

  const { imgs, title, total_area, bedrooms_quantity, holl, living_room, kitchen, wardrobe, bathroom_quantity, terrace, garage } = house;
   
   return (
    <div>
      {house && 
      <div className={styles.container}>
      <Carousel className={styles.carusel}>
          {imgs && imgs.map((item, index) => {
            console.log(imgs)
        return <div>
                    <img src={`http://localhost:4000/${item}`} alt="house" />
                </div>
      })}
      </Carousel>
      <div>
        <h2>{title}</h2>
        <p><span>total area: </span> {total_area}</p>
        <p><span>bedrooms quantity: </span> {bedrooms_quantity}</p>
        <p><span>holl: </span> {holl}</p>
        <p><span>living room: </span> {living_room}</p>
        <p><span>kitchen: </span> {kitchen}</p>
        <p><span>wardrobe: </span> {wardrobe}</p>
        <p><span>bathroom quantity: </span> {bathroom_quantity}</p>
        <p><span>terrace: </span> {terrace}</p>
        <p><span>garage: </span> {garage}</p>
      </div>
      </div>
      }    
    </div>
  )
}
