import React from "react";
// import { StateContext } from "../../../context/context";
import { StateConsume } from "../../../context/manageState";
import ViewCourseModal from "../../modal/viewCoursesModal";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const Read = () => {
  // const [data, setData] = useContext(StateContext);
  // if (data.length === 0) {
  //   return null;
  // }

  // const deleteItem = (id) => {
  //   setData(data.filter((d) => d._id !== id));
  // };

  return (
    <StateConsume>
      {(value) => {
        const { data, deleteItem, modal, handleModalData } = value;
        if (data.length === 0) {
          return null;
        }
        return (
          <div className="container mt-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Middle</th>
                  <th scope="col">Last</th>
                  <th scope="col">Birth Date</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Course/s</th>
                  <th scope="col" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              {data.map((d) => {
                return (
                  <tbody key={d.id}>
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
                      <td>
                        <Link to={`/edit/${d._id}`} className="btn btn-primary">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteItem(d._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
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
