import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./customerFacing/components/HeaderComponent";
import FooterComponent from "./customerFacing/components/FooterComponent";
import Home from "./customerFacing/pages/Home";
import PageNotFound from "./customerFacing/pages/PageNotFound";
import About from "./customerFacing/pages/About";
import ContactUs from "./customerFacing/pages/ContactUs";
import Gallery from "./customerFacing/pages/Gallery";
import Donation from "./customerFacing/pages/Donation";
import Events from "./customerFacing/pages/Events";
import Services from "./customerFacing/pages/Services";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const {t} = useTranslation()

  const [donationDetail, setDonationDetail] = useState({
    pujaName: "",
    donationAmount: 0,
  });

  const {meal1, meal2, meal3, meal4} = t("annaDhanam.annaDhanam_meal")

  const annaDhanam = [
    {
      meal: "21 Meals",
      desc: meal1,
      amount: 525,
      fromColor: "from-purple-400",
      toColor: "to-pink-500",
    },
    {
      meal: "51 Meals",
      desc: meal2,
      amount: 1275,
      fromColor: "from-green-400",
      toColor: "to-blue-500",
    },
    {
      meal: "101 Meals",
      desc: meal3,
      amount: 2525,
      fromColor: "from-yellow-400",
      toColor: "to-red-500",
    },
    {
      meal: "151 Meals",
      desc: meal4,
      amount: 3775,
      fromColor: "from-red-400",
      toColor: "to-orange-500",
    },
  ];

  return (
    <div>
        <HashRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home annaDhanam={annaDhanam} donationDetail={donationDetail} setDonationDetail={setDonationDetail}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services annaDhanam={annaDhanam} donationDetail={donationDetail} setDonationDetail={setDonationDetail} />} />
            <Route path="/donation" element={<Donation donationDetail={donationDetail} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound  />} />
          </Routes>
          <FooterComponent />
    </HashRouter>
        
    </div>
  );
}

export default App;
