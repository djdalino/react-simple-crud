import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const ItemList = ({ value, deleteItem, handleModalData }) => {
  const {
    _id,
    firstName,
    middleName,
    lastName,
    birthday,
    gender,
    course,
  } = value;
  return (
    <div className="container text-center text-dark pt-2 item-list border-top ">
      <div className="row">
        <div className="col-10 mx-auto col-lg">
          <span className="d-lg-none text-capitalize">first name: </span>
          {firstName}
        </div>
        {middleName.length < 1 ? (
          <div className="col-10 mx-auto col-lg"></div>
        ) : (
          <div className="col-10 mx-auto col-lg">
            <span className="d-lg-none text-capitalize">middle name: </span>
            {middleName}
          </div>
        )}

        <div className="col-10 mx-auto col-lg">
          <span className="d-lg-none text-capitalize">last name: </span>
          {lastName}
        </div>
        <div className="col-10 mx-auto col-lg">
          <span className="d-lg-none text-capitalize">birth date: </span>
          <Moment format="YYYY/MM/DD">{birthday}</Moment>
        </div>
        <div className="col-10 mx-auto col-lg">
          <span className="d-lg-none text-capitalize">gender: </span>
          {gender}
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            {course.length === 0 ? (
              "Not Enrolled"
            ) : course.length > 1 ? (
              <React.Fragment>
                <span className="d-lg-none text-capitalize">
                  {course.length > 1 ? "courses: " : "course"}
                </span>
                <span
                  className="text-success course-link"
                  onClick={() => handleModalData(_id)}
                >
                  View All ({course.length})
                </span>
              </React.Fragment>
            ) : (
              course.map((c) => {
                return (
                  <React.Fragment key={c.value}>
                    <span className="d-lg-none text-capitalize">
                      {course.length > 1 ? "courses" : "course: "}
                    </span>
                    {c.label}
                  </React.Fragment>
                );
              })
            )}
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="d-flex justify-content-center">
            <Link
              to={`/edit/${_id}`}
              className="btn btn-primary mr-2 button-item button-item"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteItem(_id)}
              className="btn btn-danger button-item button-delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
