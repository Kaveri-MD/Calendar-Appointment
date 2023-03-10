import React, { useContext} from "react";
import "../../styles/rightNavigation/rightNavigation.scss";
import DisplayTime from "./DisplayTime";
import { Routes, Route } from "react-router-dom";
import MainCalendar from "./MainCalendar";
import { ReferenceDataContext } from "../context/ReferenceDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function RightNavigation() {
  const {
    error,
    setError,
    errorPopUp,
    setErrorPopUp,
  } = useContext(ReferenceDataContext);

  const handleXmark = () => {
    setErrorPopUp(false);
    setError("");
  };
  
  error && setErrorPopUp(true);

  console.log(error);
  console.log(errorPopUp);
  return (
    <div className="right-navigation" >
      {error && errorPopUp && (
        <div className="error-container">
          <FontAwesomeIcon
            className="x-mark"
            icon={faXmark}
            onClick={handleXmark}
          />
          <div className="error-message">{error}</div>
        </div>
      )}

      <Routes>
        <Route path="/month" element={<MainCalendar />} />

        <Route path="/" element={<DisplayTime />} />
      </Routes>
    </div>
  );
}

export default RightNavigation;

