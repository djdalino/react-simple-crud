import React from "react";

import Moment from "react-moment";
const ItemList = ({ value, handleModalData }) => {
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
    <div className="container text-center bg-gray text-dark item-list border-top ">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">first name: </span>
          {firstName}
        </div>
        {middleName.length < 1 ? (
          <div className="col-10 mx-auto col-lg-2"></div>
        ) : (
          <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none text-capitalize">middle name: </span>
            {middleName}
          </div>
        )}

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">last name: </span>
          {lastName}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">birth date: </span>
          <Moment format="YYYY/MM/DD">{birthday}</Moment>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">gender: </span>
          {gender}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="text-uppercase">
            {course.length === 0 ? (
              "Not Enrolled"
            ) : course.length > 1 ? (
              <button
                className="btn btn-success view-course"
                onClick={() => handleModalData(_id)}
              >
                View Courses({course.length})
              </button>
            ) : (
              course.map((c) => {
                return <p key={c.value}>{c.label}</p>;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
