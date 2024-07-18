import React from "react";
import calendarIcon from "../../assets/images/calendar-svgrepo-com.svg";
import hinduIcon from "../../assets/images/hindu-symbol-svgrepo-com.svg";
import donationIcon from "../../assets/images/donation-svgrepo-com.svg";
import { Link } from "react-router-dom";

const OnlineServiceComponent = () => {
  return (
    <div className="bg-[#f1f2ec] md:mx-4 my-12 p-12 shadow-xl">
      <h2 className="text-center md:mb-16 mb-8 text-red-900 sm:text-5xl text-2xl font-bold mb-4">
        Online Services
      </h2>
      <div className="flex lg:flex-row justify-center flex-col gap-4">
        <div className="events flex flex-col items-center bg-[#c3a46b] md:px-16 md:py-12 rounded py-8 sm:mx-12 mx-4">
          <Link to="/events">
            <img src={calendarIcon} className="h-24 w-24" alt="" />
          </Link>
          <h4 className="text-red-900 sm:text-3xl text-2xl font-bold mt-4">Events</h4>
        </div>
        <div className="events flex flex-col items-center bg-[#c3a46b] rounded md:px-16 md:py-12 py-8 sm:mx-12 mx-4">
          <Link to="/services">
              <img src={hinduIcon} className="h-24 w-24" alt="" />
          </Link>
          <h4 className="text-red-900 sm:text-3xl text-2xl font-bold mt-4">Pooja</h4>
        </div>
        <div className="events flex flex-col items-center bg-[#c3a46b] md:px-12 rounded md:py-12 py-8 sm:mx-12 mx-4">
          <Link to="/donation">
            <img src={donationIcon} className="h-24 w-24" alt="" />
          </Link>
          <h4 className="text-red-900 sm:text-3xl text-2xl font-bold mt-4">Donation</h4>
        </div>
      </div>
    </div>
  );
};

export default OnlineServiceComponent;
