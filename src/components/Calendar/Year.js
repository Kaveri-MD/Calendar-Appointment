import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { format, setYear, add, sub } from "date-fns";
import "../../styles/calendar/year.scss";
import Cell from "./Cell";
import { ReferenceDataContext } from "../context/ReferenceDataContext";

function Year() {
  const {
    currentDate,
    setCurrentDate,
    setYearAngle,
    setMonthAngle,
  } = useContext(ReferenceDataContext);

  const year = currentDate.getFullYear();
  const years = Array.from(new Array(16), (val, index) => index + year);

  const handleYear = (year) => {
    setYearAngle(false);
    setMonthAngle(true);
    setCurrentDate(setYear(currentDate, year));
  };
  const prevYear = () => {
    setCurrentDate(sub(currentDate, { years: 16 }));
  };
  const nextYear = () => {
    setCurrentDate(add(currentDate, { years: 16 }));
  };
  return (
    <div className="calendar-year-container">
      <div className="calendar-angle" onClick={() => prevYear()}>
        <Cell>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Cell>
      </div>

      <div className="calendar-month">
        {format(currentDate, "yyyy")}-
        {format(add(currentDate, { years: 15 }), "yyyy")}
      </div>
      <div className="calendar-angle" onClick={() => nextYear()}>
        <Cell>
          <FontAwesomeIcon icon={faAngleRight} />
        </Cell>
      </div>
      {years.map((year) => {
        return (
          <div className="calendar-item" onClick={() => handleYear(year)}>
            {year}
          </div>
        );
      })}
    </div>
  );
}

export default Year;
