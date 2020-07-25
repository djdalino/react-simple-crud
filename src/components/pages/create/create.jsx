import React from "react";
import DatePicker from "react-datepicker";
import { courses } from "../course/course";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from "react-multi-select-component";
import Read from "../read/read";
import { StateConsume } from "../../../context/manageState";
const Create = (props) => {
  return (
    <StateConsume>
      {(value) => {
        const {
          firstName,
          setFirstName,
          lastName,
          setLastName,
          middleName,
          setMiddleName,
          birthday,
          setBirthday,
          setGender,
          addItem,
          course,
          setCourse,
          error,
          success,
        } = value;
        return (
          <div className="container">
            <div className="crud-wrapper">
              <h1 className="text-center">Enrollment Crud Application</h1>
              {error ? (
                <div className="alert alert-danger">
                  Fill all * required fields
                </div>
              ) : (
                ""
              )}
              {success ? (
                <div className="alert alert-success text-capitalize">
                  successfully submitted
                </div>
              ) : (
                ""
              )}
              <form onSubmit={addItem} className="mx-auto">
                <div className="form-group row ">
                  <label
                    htmlFor="firstName"
                    className="col-lg-3 col-sm-3 col-form-label"
                  >
                    First Name*
                  </label>
                  <input
                    className="col"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="middleName"
                    className="col-lg-3 col-sm-3 col-form-label"
                  >
                    Middle Name
                  </label>
                  <input
                    className="col"
                    type="text"
                    name="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="lastName"
                    className="col-lg-3 col-sm-3 col-form-label"
                  >
                    Last Name*
                  </label>
                  <input
                    className="col"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="birthday"
                    className="col-lg-3 col-sm-3 col-form-label"
                  >
                    Birth Date*
                  </label>
                  <DatePicker
                    selected={birthday}
                    onChange={(date) => setBirthday(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>

                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-lg-3 col-sm-3 pt-0">
                      Gender *
                    </legend>
                    <div className="col-sm-2 ml-2 align-self-end">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          onChange={(e) => setGender(e.target.value)}
                          id="exampleRadios1"
                          value="Male"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          onChange={(e) => setGender(e.target.value)}
                          id="exampleRadios1"
                          value="Female"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label htmlFor="course" className="col-lg-3 col-form-label">
                    Select Course
                  </label>
                  <MultiSelect
                    labelledBy={"Select"}
                    className="col"
                    options={courses}
                    value={course}
                    onChange={setCourse}
                  />
                </div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="submit"
                />
              </form>
            </div>
            <Read />
          </div>
        );
      }}
    </StateConsume>
  );
};

export default Create;
