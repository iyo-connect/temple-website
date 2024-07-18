import React from 'react'
import banerImg2 from "../../assets/images/banerImg2.jpg"
import QRcode from "../../assets/images/QRcode.jpeg"




const Donation = () => {
  return (
    <div className='md:container'>
      <div className='relative mb-4' > 
            <img src={banerImg2} className=' bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>Donation</h1>
        </div>
        <h1 className='font-bold md:text-6xl text-3xl text-center text-red-700 my-4'>General Donation</h1>
        <div className="generalDonation flex flex-col md:flex-row border-lg rounded bg-gray-50 m-8 p-8 justify-around  md:items-start items-center">
            <div className="scan text-center my-4">
              <h3 className='font-medium text-2xl my-4'>Scan & pay with any UPI app</h3>
              <img src={QRcode} alt="Scan&pay" className='inline' />
            </div>
            <div className="account text-center my-4">
              <h3 className='font-medium text-2xl my-4'>Direct Bank Account Details</h3>
              <p><span className='font-medium text-blue-800'>UPI:</span> 85758575@sbi</p>
              <p><span className='font-medium text-blue-800'>Account No:</span> 22233300000</p>
              <p><span className='font-medium text-blue-800'>Account Name:</span> Temple Name</p>
              <p><span className='font-medium text-blue-800'>IFSC:</span> SBIN0012784</p> 
            </div>
            
        </div>
    </div>
  )
}

export default Donation