import { Link } from "react-router-dom";
import god1 from "../../assets/images/god1.jpg";
import OnlineServiceComponent from "../components/OnlineServiceComponent";
import PastEventsComponent from "../components/PastEventsComponent";
function Home() {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div
          className="relative bg-cover bg-center h-[400px] w-full "
          style={{ backgroundImage: `url(${god1})` }}
        >
          <div className="absolute  bottom-20 left-10 text-white transparent  ">
            <p className="bg-bold text-2xl mb-2">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, rem."
            </p>
            <div className="text-center">
              <button className="rounded px-4 bg-red-800 text-gray-50 p-2 ">
                <Link to="./services" className="font-bold">Pooja Seva</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
      <section className="about-section md:mx-4 my-4 md:p-8 p-2 bg-gray-50 drop-shadow">
        <div className="container text-center py-4">
          <h2 className="text-red-900 sm:text-5xl text-2xl font-bold mb-4">
            About
          </h2>
          <p className="sm:m-4 my-4 sm:px-20 sm:text-xl sm:leading-10">
            Shri Saibaba Sansthan Trust, Shirdi, is the Governing and
            Administrative body of Shri Saibaba's Samadhi Temple and all others
            temples in this premises, and devoted towards teachings of Saibaba{" "}
            <span className="text-red-600 font-bold"> "Sabka Malik Ek" </span>{" "}
            and providing amenities to Sai devotees who are visiting Shirdi and
            Sai Samadhi Temple.
          </p>
          <button className="bg-yellow-600 font-bold text-gray-50 py-2 px-8 rounded">
            <Link to="/about">More</Link>
          </button>
        </div> 
      </section>
      {/* about section */}
      {/* Online service  */}
      <OnlineServiceComponent />
      {/* Online service  */}
      {/* Events section */}
      <PastEventsComponent />
      {/* Events section */}
    </div>
  );
}

export default Home;
