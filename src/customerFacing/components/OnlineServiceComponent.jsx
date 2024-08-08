import React from "react";
import calendarIcon from "../../assets/images/calendar-svgrepo-com.svg";
import hinduIcon from "../../assets/images/hindu-symbol-svgrepo-com.svg";
import donationIcon from "../../assets/images/donation-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OnlineServiceComponent = () => {
  const { t } = useTranslation();

  const { online_service } = t("homepage_headers");
  const { donation, events, pooja } = t("buttons");

  const onlineServicesLinks = [
    [calendarIcon, "/events", events],
    [hinduIcon, "/services", pooja],
    [donationIcon, "/donation", donation],
  ];

  return (
    <div className="bg-[#f1f2ec] md:mx-4 my-12 p-12 shadow-xl">
      <h2 className="text-center md:mb-16 mb-8 text-red-900 sm:text-5xl text-2xl font-bold mb-4">
        {online_service}
      </h2>
      <div className="flex lg:flex-row justify-center flex-col gap-4">
        {onlineServicesLinks.map(([icon, linkPath, linkName], index) => {
          return <div className="flex flex-col items-center bg-[#c3a46b] md:px-16 md:py-12 rounded py-8 sm:mx-12 mx-4 hover:scale-105 transition-transform transform " key={index}>
            <Link to={linkPath}>
              <img src={icon} className="h-24 w-24" alt="" />
            </Link>
            <h4 className="text-red-900 sm:text-3xl text-2xl font-bold mt-4">
              {linkName}
            </h4>
          </div>;
        })}
      </div>
    </div>
  );
};

export default OnlineServiceComponent;
