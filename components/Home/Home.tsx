import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Why from './Why/Why'
import Reviews from './Reviews/Reviews'

const HomeComponent = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <Why/>
      <Reviews/>
    </div>
  )
}

export default HomeComponent
