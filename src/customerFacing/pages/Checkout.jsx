import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ donationDetail }) => {
  console.log('abc----', donationDetail)
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    fullName: '',
    address:'',
    city:'',
    state:'',
    pincode:'',
    country: 'India',
    whatsapp: '',
    email:'',

  })

  useEffect(()=>{
    setTimeout(()=>{

      if(donationDetail.donationAmount === 0){
        navigate('/services')
      }
    }, 3000)
  })

  
  const handleUserInfo = (e) =>{
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(userInfo)
  }
  

  return (
    
      <div className="flex flex-col md:flex-row p-6 space-x-4 bg-background rounded-lg shadow-md">
        <div>
          
        </div>
        {donationDetail.donationAmount === 0 ? "You are directing to Services page, kindy choose one of puja donations":
        <div className="flex-1 bg-card rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">YOUR DETAILS</h2>
          <form className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col md:w-2/3">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="fullName"
                >
                  Full name *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  id="fullName"
                  value={userInfo.fullName}
                  onChange={handleUserInfo}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="address"
                >
                  Complete Address *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  id="address"
                  value={userInfo.completeAddress}
                  onChange={handleUserInfo}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="city"
                >
                  City *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  id="city"
                  value={userInfo.city}
                  onChange={handleUserInfo}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="state"
                >
                  State *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="text"
                  id="state"
                  value={userInfo.state}
                  onChange={handleUserInfo}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="pincode"
                >
                  Pincode *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="number"
                  id="pincode"
                  value={userInfo.pincode}
                  onChange={handleUserInfo}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="country"
                >
                  Country *
                </label>
                <h2
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  id="country"
                  value={userInfo.country}
                  onChange={handleUserInfo}
                  required
                >
                  India
                </h2>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="whatsapp"
                >
                  Enter 10 Digit WhatsApp Number
                </label>
                <div className="flex items-center">
                  <span className="border border-border rounded-l-md p-3 bg-muted text-muted-foreground">
                    +91
                  </span>
                  <input
                    className="border border-border rounded-r-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    type="tel"
                    id="whatsapp"
                    value={userInfo.whatsapp}
                    onChange={handleUserInfo}
                    placeholder="9310269713"
                    required
                  />
                </div>
                <small className="text-muted-foreground">
                  Kindly enter your number without 0 and we recommend you to
                  enter WhatsApp number to get transaction notifications.
                </small>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-muted-foreground"
                  htmlFor="email"
                >
                  Email address *
                </label>
                <input
                  className="border border-border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  type="email"
                  id="email"
                  value={userInfo.email}
                  onChange={handleUserInfo}
                  required
                />
              </div>
            </div>
            <div className=" rounded-lg p-6 w-full h-min md:w-1/3 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">SUMMARY</h2>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Product</span>
                <span className="font-medium">Subtotal</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{donationDetail.pujaName} × 1</span>
                <span>₹{donationDetail.donationAmount}</span>
              </div>
              <div className="flex justify-between mb-2 font-semibold">
                <span>Subtotal</span>
                <span>₹{donationDetail.donationAmount}</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total</span>
                <span>₹{donationDetail.donationAmount}</span>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Razorpay Online
              </h3>
              <button type="submit" value='submit' className="bg-primary text-primary-foreground w-full p-3 rounded-lg hover:bg-primary/80 transition duration-200" onSubmit={handleSubmit}>
                PLACE ORDER
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                Your personal details will be used to process your order,
                support your experience throughout this website, and for other
                purposes described on temple
              </p>
            </div>
          </form>
        </div>
        }
      </div>
    
  );
};

export default Checkout;
