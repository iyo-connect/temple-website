import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const EventsList = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sampleEvents = [
    {
      id: 1,
      name: "Event A",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-07-20",
    },
    {
      id: 2,
      name: "Celeberation of Mahotasava",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-07-25",
    },
    {
      id: 3,
      name: "Event C",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-07-22",
    },
    {
      id: 4,
      name: "Event D",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-06-15",
    },
    {
      id: 5,
      name: "Event E",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-04-02",
    },
    {
      id: 6,
      name: "Event D",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-08-2",
    },
    {
      id: 7,
      name: "Event E",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-08-08",
    },
    {
      id: 7,
      name: "Event D",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-08-10",
    },
    {
      id: 8,
      name: "Event E",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quas?",
      startDate: "2024-08-016",
    },
  ];

  const fileteredEvents = sampleEvents.filter((event) => {
    const eventDate = new Date(event.startDate);
    return eventDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="md:container md:m-8 m-4 flex md:flex-row flex-col justify-center md:items-start items-center md:gap-10">
      <div className="">
        
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className=" my-8  "
        />
      </div>

      <div className="md:my-8 md:w-1/2 w-full md:p-8 p-4 shadow-lg bg-red-50 rounded text-center">
        <h2 className="font-medium text-yellow-600 text-2xl mb-4">
          Events on {selectedDate.toDateString()}:
        </h2>
        <ul>
          {fileteredEvents.map((event) => (
            <li key={event.id}>
              <h4 className="text-2xl font-medium text-gray-400 text-start">
                {event.name}
              </h4>
              <p className="text-start text-gray-800">{event.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsList;
