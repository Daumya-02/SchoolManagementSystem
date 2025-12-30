"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
     const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between my-2 px-2">
        <h1 className="text-lg font-bold uppercase my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-2">
        {events.map((event)=>(
            <div key={event.id} className="border-2 border-gray-100 my-2 rounded-md border-t-8 odd:border-t-purrple even:border-t-ellow px-3 py-4">
                <div className="flex items-center justify-between mb-1 ">
                    <h2 className="font-semibold text-gray-600">{event.title}</h2>
                    <h4 className="text-gray-300 text-sm">{event.time}</h4>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar