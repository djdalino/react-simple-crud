import React from "react";

const ItemColumn = () => {
  return (
    <div className="container text-center d-none d-lg-block mt-3 pt-3 pb-3 border-top">
      <div className="row">
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>first name</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>middle name</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>last name</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>birth date</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>gender</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>course/s</h5>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg">
          <div className="text-uppercase">
            <h5>Actions</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemColumn;
