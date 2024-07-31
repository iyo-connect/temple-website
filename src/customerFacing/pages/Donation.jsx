import React from 'react'
import banerImg2 from "../../assets/images/banerImg2.jpg"
import QRcode from "../../assets/images/QRcode.jpeg"




const Donation = ({donationDetail}) => {
  console.log(donationDetail)
  return (
    <div >
      <div className='relative mb-4' > 
            <img src={banerImg2} className=' bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>Donation</h1>
        </div>

        {/* <h1 className='font-bold md:text-6xl text-3xl text-center text-red-700 my-4'>General Donation</h1> */}
        <div className="container text-center md:mx-12 px-12 py-4 bg-red-50 leading-8">
          <h2 className='font-semibold text-3xl mb-2 text-red-700' >Purpose of Donation</h2>
          <p className='font-semibold'>
          You can donate for Deity Seva, Anna Daan, Gita-daan, Vidya daan, Temple Support, Sadhu Bhojan, Food for Life and more. <br />

          As said in Bhagavad Gita 18.5- acts of sacrifice, charity and penance are not to be given up; they must be performed. <br /> Indeed, sacrifice, charity and penance purify even the great souls.
          </p>
        </div>

       {donationDetail.donationAmount === 0 ? '' :
        <div className="container text-center p-4 m-4 bg-white shadow-lg">
          <h2 className='font-semibold text-3xl'>Donation Details</h2>
          <p>Donation for: <span> {donationDetail.pujaName}</span></p>
          <p>Amount: ₹<span> {donationDetail.donationAmount}</span></p>
        </div>
       } 
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