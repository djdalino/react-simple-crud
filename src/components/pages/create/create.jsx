import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../../context/context";
import DatePicker from "react-datepicker";
import { courses } from "../course/course";
import "react-datepicker/dist/react-datepicker.css";
import uuid4 from "uuid";
import MultiSelect from "react-multi-select-component";
import Read from "../read/read";

const Create = () => {
  const [data, setData] = useContext(StateContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const handleCourses = () => {
      setCourse(courses);
    };
    handleCourses();
  }, []);
  console.log(birthday);
  const addItem = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      birthday === "" ||
      gender === ""
    ) {
      setError(true);
    } else {
      setData([
        ...data,
        {
          _id: uuid4(),
          firstName,
          lastName,
          middleName,
          birthday,
          gender,
          course,
        },
      ]);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Create</h1>
      {error ? (
        <div className="alert alert-danger">Fill all * required fields</div>
      ) : (
        ""
      )}
      <form onSubmit={addItem} className="mx-auto">
        <div className="form-group row ">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            First Name*
          </label>
          <input
            className="col-sm-4"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="middleName" className="col-sm-2 col-form-label">
            Middle Name
          </label>
          <input
            className="col-sm-4"
            type="text"
            name="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Last Name*
          </label>
          <input
            className="col-sm-4"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="birthday" className="col-sm-2 col-form-label">
            Birth Date*
          </label>
          <DatePicker
            selected={birthday}
            onChange={(date) => setBirthday(date)}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Gender*
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              onChange={(e) => setGender(e.currentTarget.value)}
              id="exampleRadios1"
              value="Male"
            />
            <label className="form-check-label mr-5 col-sm-2" htmlFor="gender">
              Male
            </label>
            <input
              className="form-check-input col-sm-2"
              type="radio"
              name="gender"
              onChange={(e) => setGender(e.currentTarget.value)}
              id="exampleRadios1"
              value="Female"
            />
            <label
              className="form-check-label"
              htmlFor="gender"
              className="col-sm-2 col-form-label"
            >
              Female
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="course" className="col-sm-2">
            Select Course
          </label>
          <MultiSelect
            labelledBy={"Select"}
            className="col-sm-4"
            options={courses}
            value={course}
            onChange={setCourse}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
      <Read />
    </div>
  );
};

export default Create;
