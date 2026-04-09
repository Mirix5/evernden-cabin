import React from "react";
import 'react-calendar/dist/Calendar.css';
import "./../css/Calendar.css";
import Calendar from 'react-calendar';

export function CabinCalendar({ visibility }) {
  const visibilityClass = visibility ? "visible" : "hidden";

  return (
    <div className={"Calendar " + visibilityClass}>
      <h2>Calendar</h2>
      <div className='calendar-wrapper'>
        <Calendar />
      </div>
    </div>
  );
}
