import React from 'react'

import SticksWords from "./src/../../../../assets/SticksWhite.png";

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
              <span>welcome</span> to the Sticks
            </h1>

            <p className='text-white'>The best new bar and grill in Madison, MN!</p>

            <p className='text-white'>
                Call us at <span className='special-word'>(320)961-4779</span>
            </p>
        </div>
    </div>
  )
}

export default Hero




              /*
                <span>welcome</span> to The Sticks
                
              */