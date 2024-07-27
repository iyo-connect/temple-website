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
import Checkout from "./customerFacing/pages/Checkout";
import { useState } from "react";

function App() {
  const [donationDetail, setDonationDetail] = useState({
    pujaName: "",
    donationAmount: 0,
  });
  return (
    <div>
      <HashRouter>
        
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services donationDetail={donationDetail} setDonationDetail={setDonationDetail} />} />
            <Route path="/checkout" element={<Checkout donationDetail={donationDetail} />} />
            <Route path="/donation" element={<Donation />} />
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
