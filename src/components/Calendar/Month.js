import React, { useContext } from "react";
import { format, setMonth } from "date-fns";
import "../../styles/calendar/month.scss";
import { ReferenceDataContext } from "../context/ReferenceDataContext";

function Month() {
  const {
    currentDate,
    setCurrentDate,
    setMonthAngle,
    setCalendar,
    setYearAngle,
  } = useContext(ReferenceDataContext);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handleMonth = (index, month) => {
    setMonthAngle(false);
    setCalendar(true);
    setCurrentDate(setMonth(currentDate, index));
  };
  const handleYear = () => {
    setYearAngle(true);
    setMonthAngle(false);
  };
  return (
    <div className="calendar-month-container">
      <div className="calendar-month" onClick={() => handleYear()}>
        {format(currentDate, "yyyy")}
      </div>
      {months.map((month, index) => {
        return (
          <div
            className="calendar-item"
            onClick={() => handleMonth(index, month)}
          >
            {month}
          </div>
        );
      })}
    </div>
  );
}

export default Month;
