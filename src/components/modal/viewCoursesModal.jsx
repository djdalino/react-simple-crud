import React from "react";
import "./viewCoursesModal.css";
import { StateConsume } from "../../context/manageState";
const ViewCourseModal = () => {
  return (
    <StateConsume>
      {(value) => {
        const { modalData, modal, setModal } = value;

        return (
          <div className="modal-container">
            <div className="modal-body">
              <div className="button-wrapper">
                <button
                  type="button"
                  className="close close-modal"
                  aria-label="Close"
                  onClick={() => setModal(!modal)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h1>Enrolled Courses: </h1>
              {modalData.course.map((c) => {
                return (
                  <p key={c.value} className="modal-label">
                    {c.label}
                  </p>
                );
              })}
            </div>
          </div>
        );
      }}
    </StateConsume>
  );
};

export default ViewCourseModal;
