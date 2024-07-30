import React from 'react'
import { useNavigate } from 'react-router-dom';

const AnnaDhanam = ({ annaDhanam ,donationDetail, setDonationDetail}) => {

    //  const navigate = useNavigate()

    const [annaDhanam1, annaDhanam2, annaDhanam3, annaDhanam4] = annaDhanam

    // const handleDonate = (dhanam) => {
    //     setDonationDetail({...donationDetail, pujaName: dhanam.meal, donationAmount: dhanam.amount})   
    //     navigate('/checkout')
    //   };
  return (
    <div>
        <div className="flex flex-wrap justify-center p-6 bg-background">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 m-4">
                <h2 className="text-2xl font-bold mb-2 text-white">Donate {annaDhanam1.meal}</h2>
                <p className="text-muted-foreground mb-4">{annaDhanam1.desc}</p>
                <p className="text-3xl font-semibold text-white">₹ {annaDhanam1.amount}</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded mt-4 transition-colors">Donate Now</button>
              </div>
        
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 m-4">
                <h2 className="text-2xl font-bold mb-2 text-white">Donate {annaDhanam2.meal}</h2>
                <p className="text-muted-foreground mb-4">{annaDhanam2.desc}</p>
                <p className="text-3xl font-semibold text-white">₹ {annaDhanam2.amount}</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded mt-4 transition-colors">Donate Now</button>
              </div>
        
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 m-4">
                <h2 className="text-2xl font-bold mb-2 text-white">Donate {annaDhanam3.meal}</h2>
                <p className="text-muted-foreground mb-4">{annaDhanam3.desc}</p>
                <p className="text-3xl font-semibold text-white">₹ {annaDhanam3.amount}</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded mt-4 transition-colors">Donate Now</button>
              </div>
        
              <div className="bg-gradient-to-r from-red-400 to-orange-500 p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 m-4">
                <h2 className="text-2xl font-bold mb-2 text-white">Donate {annaDhanam4.meal}</h2>
                <p className="text-muted-foreground mb-4">{annaDhanam4.desc}</p>
                <p className="text-3xl font-semibold text-white">₹ {annaDhanam4.amount}</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded mt-4 transition-colors">Donate Now</button>
              </div>
            </div>
    </div>
  )
}

export default AnnaDhanam