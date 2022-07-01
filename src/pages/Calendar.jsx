import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-4">
      <p className="text-xl text-dark font-bold">Calendar</p>
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
