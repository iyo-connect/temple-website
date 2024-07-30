import React from "react";
import { useNavigate } from "react-router-dom";



const DonationList = ({ pujas, donationDetail, setDonationDetail }) => {
  
  const navigate = useNavigate()

  const handleDonate = (puja) => {
    setDonationDetail({...donationDetail, pujaName: puja.pujaName, donationAmount: puja.donationAmount})   
    navigate('/checkout')
  };


  return (
    <div>
      <table className=" md:w-3/4 w-full  bg-blue-100 font-medium rounded  ">
        <tbody className="divide-y divide-lime-400">
          {pujas.map((puja, index) => {
            return (
              <tr key={index}>
                <td className="w-2/3 p-2 md:p-4 md:text-xl">
                  {puja.pujaName} <br />
                  <small className="text-gray-800 font-bold">
                    ₹ {puja.donationAmount}
                  </small>
                </td>
                <td className="w-1/3">
                  <button  onClick={()=> handleDonate(puja)} className="bg-red-800  text-slate-200 md:text-lg text-sm font-sm rounded px-2 py- transition-transform transform hover:scale-105" >Donate now</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      
    </div>
  );
};

export default DonationList;
