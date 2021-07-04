import React, { useState } from "react";

const UseForm = (props) => {
  const [inpValues, setInpValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    setInpValues({
      ...inpValues,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(props(inpValues));
    console.log(inpValues);
  };

  return { changeHandler, inpValues, submitHandler, errors };
};

export default UseForm;
