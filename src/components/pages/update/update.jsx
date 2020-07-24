import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../../context/context";
import DatePicker from "react-datepicker";
import { courses } from "../course/course";
import MultiSelect from "react-multi-select-component";
import { withRouter } from "react-router-dom";
const Update = (props) => {
  const editId = props.match.params.id;
  console.log(editId);
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
  console.log(item);
  const updateItem = (e) => {
    e.preventDefault();
    if (
      item.firstName === "" ||
      item.lastName === "" ||
      birthday === "" ||
      gender === ""
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
      alert("edit successfully");
      props.history.push("/");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Edit</h1>
      {error ? (
        <div className="alert alert-danger">Fill all * required fields</div>
      ) : (
        ""
      )}

      <form onSubmit={updateItem}>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            First Name*
          </label>
          <input
            className="col-sm-4"
            type="text"
            name="firstName"
            value={item.firstName}
            onChange={handleInputChange}
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
            value={item.middleName}
            onChange={handleInputChange}
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
            value={item.lastName}
            onChange={(e) => setItem(e.target.value)}
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
              name="male"
              onChange={(e) => setGender(e.currentTarget.value)}
              id="exampleRadios1"
              value="Female"
            />
            <label
              className="form-check-label"
              htmlFor="female"
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
            className="col-sm-4"
            options={courses}
            value={course}
            onChange={setCourse}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default withRouter(Update);
