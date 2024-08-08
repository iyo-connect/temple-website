import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AnnaDhanam = ({ annaDhanam, donationDetail, setDonationDetail }) => {
  const navigate = useNavigate();

  const handleDonate = (dhanam) => {
    setDonationDetail({
      ...donationDetail,
      pujaName: dhanam.meal,
      donationAmount: dhanam.amount,
    });
    navigate("/donation");
  };

  const { t } = useTranslation();

  const { annaDhanam_text } = t("annaDhanam");
  const { donate_now } = t("buttons");

  return (
    <div className="m-2 border shadow-lg  p-2 rounded-lg py-4">
      <h2 className="font-bold md:text-3xl text-2xl mb-2 text-red-800 md:px-8 px-4 text-center">
        Anna danam or Anna daan is maha daan
      </h2>
      <p className="md:text-xl mb-4 md:px-8 px-4 text-center">
        {annaDhanam_text}
      </p>
      <div className="flex flex-wrap justify-center p-6 bg-background">
        {annaDhanam.map((dhanam, index) => (
          <div
            className={`bg-gradient-to-r ${dhanam.fromColor} ${dhanam.toColor} p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 m-4`}
            key={index}
          >
            <h2 className="text-2xl font-bold mb-2 text-white">
              Donate {dhanam.meal}
            </h2>
            <p className="text-muted-foreground mb-4">{dhanam.desc}</p>
            <p className="text-3xl font-semibold text-white">
              ₹ {dhanam.amount}
            </p>
            <button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded mt-4 transition-colors"
              onClick={() => handleDonate(dhanam)}
            >
              {donate_now}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnaDhanam;
