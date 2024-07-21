import React from 'react'
import banerImg1 from "../../assets/images/about-banner_0.jpg"

import PastEventsComponent from '../components/PastEventsComponent'
import EventsList from '../components/EventsList'

const Events = () => {
  return (
    <div>
        <div className='relative mb-4' > 
            <img src={banerImg1} className='blur-[1px] bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>Events</h1>
        </div>
        <div className="md:container calender drop-shadow rounded bg-blue-50 py-2">
          <h2 className='font-bold md:text-5xl text-2xl text-center text-red-800'>Upcomming Events</h2>
          <EventsList />
        </div>
        <PastEventsComponent/>
    </div>
  )
}

export default Events