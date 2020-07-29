import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../../context/context";
import DatePicker from "react-datepicker";
import { courses } from "../course/course";
import MultiSelect from "react-multi-select-component";
import { withRouter, Link } from "react-router-dom";

const Update = (props) => {
  const editId = props.match.params.id;
  const [data, setData] = useContext(StateContext);
  const [item, setItem] = useState([]);
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getMatchData = (id) => {
      const val = data.find((d) => d._id === id);
      setItem(val);
    };
    getMatchData(editId);
  }, [data, editId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setItem({ ...item, [name]: value });
  };
  const updateUser = (id, updatedUser) => {
    setData(data.map((d) => (d._id === id ? updatedUser : d)));
  };
  const updateItem = (e) => {
    e.preventDefault();
    if (
      item.firstName === "" ||
      item.lastName === "" ||
      birthday === "" ||
      gender === "" ||
      course.length < 1
    ) {
      setError(true);
    } else {
      updateUser(item._id, {
        _id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        middleName: item.middleName,
        birthday: birthday,
        gender: gender,
        course: course,
      });

      alert("Update successfully");
      props.history.push("/");
    }
  };
  return (
    <div className="container">
      <div className="crud-wrapper">
        <h1 className="text-center">Update student information</h1>
        {error ? (
          <div className="alert alert-danger">Fill all * required fields</div>
        ) : (
          ""
        )}

        <form onSubmit={updateItem} className="mx-auto">
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-4 col-form-label">
              First Name*
            </label>
            <input
              className="col-sm"
              type="text"
              name="firstName"
              value={item.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group row">
            <label htmlFor="middleName" className="col-sm-4 col-form-label">
              Middle Name
            </label>
            <input
              className="col-sm"
              type="text"
              name="middleName"
              value={item.middleName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label">
              Last Name*
            </label>
            <input
              className="col-sm"
              type="text"
              name="lastName"
              value={item.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group row">
            <label htmlFor="birthday" className="col-sm-4 col-form-label">
              Birth Date*
            </label>
            <DatePicker
              selected={birthday}
              onChange={(e) => setBirthday(e)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label  col-sm-4 pt-0">
                Gender *
              </legend>
              <div className="col-sm-2 ml-2 align-items-end">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    id="exampleRadios1"
                    value="Male"
                  />
                  <label className="form-check-label" for="gridRadios1">
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
                  <label className="form-check-label" for="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <label htmlFor="course" className="col-sm-4">
              Select Course*
            </label>
            <MultiSelect
              className="col-sm"
              options={courses}
              value={course}
              onChange={setCourse}
            />
          </div>
          <div className="row justify-content-center mt-5">
            <input
              className="btn btn-primary mr-4"
              type="submit"
              value="Submit"
            />
            <Link to="/create" className="btn btn-danger">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Update);
