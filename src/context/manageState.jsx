import React, { useState, useEffect } from "react";
import uuid4 from "uuid";
import { courses } from "../components/pages/course/course";
import { getData } from "./initialState";
const StateProvider = React.createContext();

const ManageState = (props) => {
  const [data, setData] = useState(getData());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleModalData = (id) => {
    setModalData(data.find((d) => d._id === id));
    setModal(!modal);
  };

  useEffect(() => {
    handleGetCourses();
  }, []);
  const handleGetCourses = () => {
    setCourse(courses);
  };
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
    <StateProvider.Provider
      value={{
        data,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        middleName,
        setMiddleName,
        birthday,
        setBirthday,
        gender,
        setGender,
        course,
        setCourse,
        error,
        modal,
        setModal,
        modalData,
        addItem: addItem,
        handleModalData: handleModalData,
      }}
    >
      {props.children}
    </StateProvider.Provider>
  );
};

const StateConsume = StateProvider.Consumer;
export { ManageState, StateConsume };
