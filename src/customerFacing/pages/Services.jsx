import React from "react";
import banerImg2 from "../../assets/images/banerImg2.jpg";
import DonationList from "../components/DonationList";
import AnnaDhanam from "../components/AnnaDhanam";
import { useTranslation } from "react-i18next";

const Services = ({ annaDhanam, donationDetail, setDonationDetail }) => {
  const { t } = useTranslation();

  const pujas = [
    { pujaName: "Archana Thali", donationAmount: 251 },
    { pujaName: "Aarti Archana Thali", donationAmount: 501 },
    { pujaName: "Maha Aarti Archana Thali", donationAmount: 1100 },
    { pujaName: "Maha Bhog Aarti Archana Thali", donationAmount: 2100 },
  ];

  const { services_title, page_line1, page_line2, page_line3 } =
    t("services_page");

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
      <div className="border shadow-lg md:p-8 p-2 rounded-lg  md:m-8 m-4">
        <h2 className="font-bold md:text-3xl text-2xl mb-2 text-red-800">
          {services_title}
        </h2>
        <p className="md:text-xl mb-8">
          {page_line1} <br /> <br />
          {page_line2} <br /> {page_line3}
        </p>

        <DonationList
          pujas={pujas}
          donationDetail={donationDetail}
          setDonationDetail={setDonationDetail}
        />
      </div>
      <div className="border shadow-lg md:p-8 p-2 rounded-lg bg-gray-100 md:m-8 m-4">
        <AnnaDhanam
          annaDhanam={annaDhanam}
          donationDetail={donationDetail}
          setDonationDetail={setDonationDetail}
        />
      </div>
    </div>
  );
};

export default Services;
