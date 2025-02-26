import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Why from './Why/Why'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import Newsletter from './Newsletter/Newsletter'
import Footer from './Footer/Footer'

const HomeComponent = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <Why/>
      <Reviews/>
      <News/>
      <Newsletter/>
    </div>
  )
}

export default HomeComponent
