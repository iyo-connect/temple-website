import React from "react";
import banerImg2 from "../../assets/images/banerImg2.jpg";
import DonationList from "../components/DonationList";

const Services = ({donationDetail, setDonationDetail}) => {
  const pujas = [
    { pujaName: "Archana Thali", donationAmount: 251 },
    { pujaName: "Aarti Archana Thali", donationAmount: 501 },
    { pujaName: "Maha Aarti Archana Thali", donationAmount: 1100 },
    { pujaName: "Maha Bhog Aarti Archana Thali", donationAmount: 2100 },
  ];
  return (
    <div className="">
      <div className="relative mb-4">
        <img
          src={banerImg2}
          className="blur-[1px] bg-cover  bg-center h-60 w-full "
          alt="bannerImg"
        />
        <h1 className="absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl">
          Online Puja
        </h1>
      </div>
      <div className="border shadow-lg md:p-8 p-2 rounded-lg bg-gray-100 md:m-8 m-4">
        <h2 className="font-bold md:text-3xl text-2xl mb-2 text-red-800">
          Show compassion and love
        </h2>
        <p className="md:text-xl mb-8">
          for even the most fallen souls and remembering them in our prayers
          with the online Puja facility. <br /> <br />
          Remembering someone in our prayers while maintain distance is a way
          out during these uncertain times. <br /> His devotees are incredibly
          dear to Krishna.
        </p>
        
        <DonationList pujas={pujas} donationDetail={donationDetail} setDonationDetail={setDonationDetail}/>
      </div>
    </div>
  );
};

export default Services;
