import React from "react";
import event_img from "../../assets/images/god2.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PastEventsComponent = () => {
  const { t } = useTranslation();

  const { read_more } = t("buttons");
  const { event_title1, event_story1 } = t("past_events.event1");
  const { event_title2, event_story2 } = t("past_events.event2");
  const { event_title3, event_story3 } = t("past_events.event3");
  const { event_title4, event_story4 } = t("past_events.event4");

  const pastEvents = [
    {
      event_img: event_img,
      title: event_title1,
      story: event_story1,
    },
    {
      event_img: event_img,
      title: event_title2,
      story: event_story2,
    },
    {
      event_img: event_img,
      title: event_title3,
      story: event_story3,
    },
    {
      event_img: event_img,
      title: event_title4,
      story: event_story4,
    },
  ];

  return (
    <div className="container-full bg-gray-50 md:mx-4 my-12 p-12 shadow-xl">
      <h2 className="text-center md:mb-16 mb-8 text-red-900 sm:text-5xl text-2xl font-bold mb-4">
        Past Events
      </h2>
      <div className="container-full flex lg:flex-row flex-col gap-4">
        {pastEvents.map((pastEvent, index) => (
          <div className="lg:w-1/4  flex flex-col gap-4 items-center border rounded-lg p-8 h-min hover:scale-105 transition-transform transform" key={index}>
            <img src={pastEvent.event_img} alt="godImg" />
            <h4 className="font-semibold text-xl">{pastEvent.title}</h4>
            <p>{pastEvent.story}</p>
            <hr className="bg-gray-200 h-1 w-full"/>
            <button className="font-medium bg-red-700 text-gray-50 px-8 py-2 rounded ">
              <Link to="#">{read_more}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEventsComponent;
