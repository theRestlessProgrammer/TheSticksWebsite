import React from 'react'
import './Gallery.css'

import imageItem1 from "../../../assets/gallery01.jpg";
import imageItem2 from "../../../assets/gallery02.jpg";
import imageItem3 from "../../../assets/gallery03.jpg";
import imageItem4 from "../../../assets/gallery04.jpg";
import imageItem5 from "../../../assets/gallery05.jpg";
import imageItem6 from "../../../assets/gallery06.jpg";
import imageItem7 from "../../../assets/gallery07.jpg";
import imageItem8 from "../../../assets/gallery08.jpg";
import imageItem9 from "../../../assets/Quesadilla.jpg";
import imageItem10 from "../../../assets/Tenders.jpg";

const Gallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img src={imageItem1} alt="Cat" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-2'>
            <img src={imageItem2} alt="Dog" className='gallery__img2' />
        </figure>

        <figure className='gallery__item gallery__item-3'>
            <img src={imageItem3} alt="Burger" className='gallery__img3' />
        </figure>

        <figure className='gallery__item gallery__item-4'>
            <img src={imageItem4} alt="Sandwich" className='gallery__img4' />
        </figure>

        <figure className='gallery__item gallery__item-5'>
            <img src={imageItem5} alt="Steak" className='gallery__img5' />
        </figure>

        <figure className='gallery__item gallery__item-6'>
            <img src={imageItem6} alt="Onion Rings" className='gallery__img6' />
        </figure>

        <figure className='gallery__item gallery__item-7'>
            <img src={imageItem7} alt="Pizza" className='gallery__img7' />
        </figure>

        <figure className='gallery__item gallery__item-8'>
            <img src={imageItem8} alt="Pasta" className='gallery__img8' />
        </figure>

        <figure className='gallery__item gallery__item-9'>
            <img src={imageItem9} alt="Quesadilla" className='gallery__img9' />
        </figure>

        <figure className='gallery__item gallery__item-10'>
            <img src={imageItem10} alt="Chicken Tenders" className='gallery__img10' />
        </figure>
    </div>
  )
}

export default Gallery
