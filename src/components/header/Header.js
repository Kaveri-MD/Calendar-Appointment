import React, { useContext } from "react";
import "../../styles/header/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { ReferenceDataContext } from "../context/ReferenceDataContext";
import SearchEvent from "./SearchEvent";
import { NavLink } from "react-router-dom";

function Header() {
  const {
    setCurrentDate,
  } = useContext(ReferenceDataContext);



  function handleSetToday() {
    setCurrentDate(new Date());
  }


  return (
    <div className="header">
      <div className="left-side">
        <div className="icon">
          <FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
          <div className="scheduler">Event Scheduler </div>
        </div>
        
      </div>

      <div className="right-side">
        <SearchEvent />
        <div className="view-by">
          <button className="today-button" onClick={() => handleSetToday()}>
            Today
          </button>
          <div onClick={() => handleSetToday()}>
            <NavLink
              to="/month"
              className={({ isActive }) =>
                isActive ? "isactive" : "primary-button"
              }
            >
              Month
            </NavLink>
          </div>
          <div onClick={() => handleSetToday()}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "isactive" : "primary-button"
              }
            >
              Day
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
