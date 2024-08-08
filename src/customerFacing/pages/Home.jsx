import { Link } from "react-router-dom";
import god1 from "../../assets/images/god1.jpg";
import OnlineServiceComponent from "../components/OnlineServiceComponent";
import PastEventsComponent from "../components/PastEventsComponent";
import { Trans, useTranslation } from "react-i18next";
import AnnaDhanam from "../components/AnnaDhanam";

function Home({ annaDhanam, donationDetail, setDonationDetail }) {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");
  const {about_home, about_god_name, about_home_last } = t("about");
  const {pooja_seva, more} = t("buttons")


  return (
    <div>
      <div className="flex justify-center items-center ">
        <div
          className="relative bg-cover bg-center h-[400px] w-full "
          style={{ backgroundImage: `url(${god1})` }}
        >
          <div className="absolute  bottom-20 left-10 text-white transparent  ">
            <p className="bg-bold text-2xl mb-2">{line2}</p>
            <div className="text-center">
              <button className="rounded px-4 bg-red-800 text-gray-50 p-2 ">
                <Link to="./services" className="font-bold">
                  {pooja_seva}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
      <section className="about-section md:mx-4 my-4 md:p-8 p-2 bg-gray-50 drop-shadow">
        <div className="container text-center py-4">
          {/* translation examples */}
          <h1 className="text-4xl mb-4">{t("greeting")}</h1>
          <p>{line2}</p>
          <Trans
            // i18nKey={"description.line1"}
            i18nKey={line1}
            values={{
              title: "Sri Kailasanathar Temple",
            }}
            components={{ 1: <b /> }}
          />
          {/* translation examples */}

          <h2 className="text-red-900 sm:text-5xl text-2xl font-bold my-4">
            About
          </h2>
          <p className="sm:m-4 my-4 sm:px-20 sm:text-xl sm:leading-10">
            {about_home}{" "}
            <Trans
              i18nKey={about_god_name}
              components={{
                2: <span className="text-red-600 font-bold" />,
                10: <q />,
              }}
            />{" "}
            {about_home_last}
          </p>
          <button className="bg-yellow-600 font-bold text-gray-50 py-2 px-8 rounded">
            <Link to="/about">{more}</Link>
          </button>
        </div>
      </section>
      {/* about section */}
      {/* Online service  */}
      <OnlineServiceComponent />
      {/* Online service  */}
      <AnnaDhanam
        annaDhanam={annaDhanam}
        donationDetail={donationDetail}
        setDonationDetail={setDonationDetail}
      />
      {/* Events section */}
      <PastEventsComponent />
      {/* Events section */}
    </div>
  );
}

export default Home;
