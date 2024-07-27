import banerImg1 from "../../assets/images/about-banner_0.jpg";
import ContactForm from "../components/ContactForm";
// import MapComponent from "../components/MapComponent";

const ContactUs = () => {
  return (
    <div className="md:container ">
      <div className="relative mb-4">
        <img
          src={banerImg1}
          className="blur-[1px] bg-cover  bg-center h-60 w-full "
          alt="bannerImg"
        />
        <h1 className="absolute bottom-20 md:right-36 right-12 text-red-800 font-medium md:text-6xl text-3xl">
          Get In Touch
        </h1>
      </div>
      <div className="my-8 px-4 py-8 sm:mx-4 border ">
        {/* Contact form */}
        <h2 className="font-medium text-2xl text-center">Contact</h2>
        <ContactForm />
      </div>
      <div className="md:container my-8 border p-8">
        {/* <MapComponent /> */}
      </div>
    </div>
  );
};

export default ContactUs;
