import React, { useContext } from "react";
import { StateContext } from "../../../context/context";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useContext(StateContext);
  if (data.length === 0) {
    return null;
  }

  const deleteItem = (id) => {
    setData(data.filter((d) => d._id !== id));
  };

  return (
    <React.Fragment>
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
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          {data.map((d) => {
            return (
              <tbody>
                <tr key={d._id}>
                  <td>{d.firstName}</td>
                  <td>{d.middleName}</td>
                  <td>{d.lastName}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{d.birthday}</Moment>
                  </td>
                  <td>{d.gender}</td>
                  <td>
                    {d.course.length === 0
                      ? "Not Enrolled"
                      : d.course.map((c) => {
                          return <p key={c.value}>{c.label}</p>;
                        })}
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
      </div>
    </React.Fragment>
  );
};

export default Read;
