import React from "react";
import { StateConsume } from "../../../context/manageState";
import ViewCourseModal from "../../modal/viewCoursesModal";
import ItemColumn from "./itemColumn";
import ItemList from "./itemList";
const Read = () => {
  return (
    <StateConsume>
      {(value) => {
        const { data, deleteItem, modal, handleModalData } = value;
        if (data.length === 0) {
          return (
            <div className="mt-5">
              <h1 className="text-center">No data</h1>
            </div>
          );
        }
        return (
          <React.Fragment>
            <ItemColumn />

            {data.map((d) => {
              return (
                <ItemList
                  key={d._id}
                  value={d}
                  deleteItem={deleteItem}
                  handleModalData={handleModalData}
                />
              );
            })}
            {modal ? <ViewCourseModal /> : null}
          </React.Fragment>
        );
      }}
    </StateConsume>
  );
};

export default Read;
