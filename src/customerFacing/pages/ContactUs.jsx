import banerImg1 from "../../assets/images/about-banner_0.jpg";
import ContactForm from "../components/ContactForm";

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
      <div className="my-8 border py-8 md:px-8 px-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1128.6713309878994!2d80.10481655082286!3d12.482773338270817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53a82c8fc00853%3A0x27a043eaff81031c!2sSri%20Kailasanathar%20Temple!5e1!3m2!1sen!2sin!4v1722947533966!5m2!1sen!2sin" title="Sri Kailasanathar Temple" className="md:container w-full h-[500px] rounded-2xl shadow py-8"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
