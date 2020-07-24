import React from "react";
// import { StateContext } from "../../../context/context";
import Moment from "react-moment";
import { StateConsume } from "../../../context/manageState";
import ViewCourseModal from "../../modal/viewCoursesModal";
const Read = () => {
  return (
    <StateConsume>
      {(value) => {
        const { data, modal, handleModalData } = value;
        console.log(modal);
        return (
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Middle</th>
                  <th scope="col">Last</th>
                  <th scope="col">Birth Date</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Course/s</th>
                </tr>
              </thead>
              {data.map((d) => {
                return (
                  <tbody key={d._id}>
                    <tr key={d._id}>
                      <td>{d.firstName}</td>
                      <td>{d.middleName}</td>
                      <td>{d.lastName}</td>
                      <td>
                        <Moment format="YYYY/MM/DD">{d.birthday}</Moment>
                      </td>
                      <td>{d.gender}</td>
                      <td>
                        {d.course.length === 0 ? (
                          "Not Enrolled"
                        ) : d.course.length > 2 ? (
                          <button
                            className="btn btn-success"
                            onClick={() => handleModalData(d._id)}
                          >
                            View All Courses({d.course.length})
                          </button>
                        ) : (
                          d.course.map((c) => {
                            return <p key={c.value}>{c.label}</p>;
                          })
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            {modal ? <ViewCourseModal /> : null}
          </div>
        );
      }}
    </StateConsume>
  );
};

export default Read;
