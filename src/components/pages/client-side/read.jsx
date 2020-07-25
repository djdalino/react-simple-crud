import React from "react";
import { StateConsume } from "../../../context/manageState";
import ViewCourseModal from "../../modal/viewCoursesModal";
import ItemColumn from "./itemColumn";
import ItemList from "./itemList";
const Read = () => {
  return (
    <StateConsume>
      {(value) => {
        const { data, modal, handleModalData } = value;
        if (data.length === 0) {
          return null;
        }
        return (
          <div className="container">
            <h1 className="text-center mt-3">Student Enrollees</h1>
            <ItemColumn />

            {data.map((d) => {
              return (
                <ItemList
                  key={d._id}
                  value={d}
                  handleModalData={handleModalData}
                />
              );
            })}

            {modal ? <ViewCourseModal /> : null}
          </div>
        );
      }}
    </StateConsume>
  );
};

export default Read;
