import React, { useContext, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../styles/leftNavigation/leftNavigation.scss";
import Modal from "react-modal";
import CreateModal from "./CreateModal";
import { ReferenceDataContext } from "../context/ReferenceDataContext";
import { subDays } from "date-fns";
import Month from "../Calendar/Month";
import Year from "../Calendar/Year";

function LeftNavigation() {
  const {
    modal,
    setModal,
    currentDate,
    setError,
    calendar,
    yearAngle,
    monthAngle,
  } = useContext(ReferenceDataContext);

  const toggleModal = () => {
    currentDate < subDays(new Date(), 1)
      ? setError("Event can't be created - Time has passed")
      : setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="left-navigation">
      <button onClick={toggleModal} className="create">
        <FontAwesomeIcon className="plus" icon={faPlus} />
        Create
      </button>
      {calendar && <Calendar />}
      {monthAngle && <Month />}
      {yearAngle && <Year />}

      {modal && (
        <Modal isOpen={modal} ariaHideApp={false} className="modal">
          <CreateModal modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
}

export default LeftNavigation;
