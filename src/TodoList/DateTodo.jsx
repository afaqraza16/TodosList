import React, { useEffect, useState } from "react";

const DateTodo = () => {
  let [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date();
      let formattedDate = now.toLocaleDateString();
      let formattedDateTim = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedDateTim}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2
        className="text-2xl w-full font-extrabold text-gray-300 
           from-slate-600 to-black"
      >
        {dateTime}
      </h2>
    </div>
  );
};

export default DateTodo;
