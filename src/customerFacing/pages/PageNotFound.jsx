import React from 'react'
import banerImg1 from "../../assets/images/about-banner_0.jpg"
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='md:container'>
        <div className='relative mb-4' > 
            <img src={banerImg1} className='blur-[1px] bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>Page Not Found</h1>
        </div>
        <div className="m-8 text-center leading-10">
                <h2 className='text-[#1c2752] md:text-8xl text-6xl font-bold'>404</h2>
                <h3 className='text-yellow-600 font-medium md:text-2xl'>Oops! That page can't be found</h3>
                <p className='text-gray-400'>Sorry, but the page you are looking for does not existing</p>
                <button className='bg-yellow-600 hover:rounded-full text-gray-50 px-6 py-1 font-medium rounded my-4'><Link to='/'>Go to Home</Link></button>
        </div>
    </div>
  )
}

export default PageNotFound