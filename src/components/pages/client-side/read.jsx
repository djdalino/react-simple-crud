import React, { useContext } from "react";
import { StateContext } from "../../../context/context";
import Moment from "react-moment";

const Read = () => {
  const [data, setData] = useContext(StateContext);
  if (data.length === 0) {
    return (
      <div>
        <h1>No Data...</h1>
      </div>
    );
  }

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
                    {d.course.length === 0
                      ? "Not Enrolled"
                      : d.course.map((c) => {
                          return <p key={c.value}>{c.label}</p>;
                        })}
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
