import React, { useState } from "react";
import { Calendar, Badge } from "antd";
import moment from "moment";

const Calender = () => {
  // Example tuition dates
  const tuitionDates = [
    "2025-12-01", // Sunday
    "2025-12-07", // Saturday
    "2025-12-14",
    "2025-12-15",
     // Sunday

     "2025-12-18",
     "2025-12-22",
     "2025-12-16",
  ];

  // Function to get list of events for a day
  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const isTuitionDay = tuitionDates.includes(dateStr);

    return isTuitionDay ? (
      <div
        className="flex justify-center items-center w-10 h-10 mx-auto rounded-full text-white"
        style={{ backgroundColor: "#004F44" }}
      >
        <span>{value.date()}</span>
      </div>
    ) : (
      <div className="text-center">{value.date()}</div>
    );
  };

  return (
    <div className="bg-white mt-4 p-2 shadow-md ">
      <h2 className="text-xl font-semibold mb-5 ">Tuition Calendar</h2>

      <Calendar
        dateCellRender={dateCellRender}
        fullscreen={true}
      />
    </div>
  );
};

export default Calender;
