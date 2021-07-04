import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UseForm from "./UseForm";
import ValidationInfo from "../UI/ValidationInfo";
import "./Form.css";

const Form = () => {
  const { changeHandler, inpValues, submitHandler, errors} =
    UseForm(ValidationInfo);

  return (
    <Card>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="firstname"
            name="firstName"
            value={inpValues.firstName}
            onChange={changeHandler}
            autoComplete="off"
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            id="lastname"
            name="lastName"
            value={inpValues.lastName}
            onChange={changeHandler}
            autoComplete='off'
          />

          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={inpValues.email}
            onChange={changeHandler}
            autoComplete="off"
          />

          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="mobileNum">Mobile Number</label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            id="mobileNum"
            name="mobileNum"
            value={inpValues.mobileNum}
            onChange={changeHandler}
            autoComplete="off"
          />
          {errors.mobileNum && <p>{errors.mobileNum}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="psw"
            name="password"
            value={inpValues.password}
            onChange={changeHandler}
            autoComplete="off"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="confPsw">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your confirm password"
            id="confPsw"
            name="confPassword"
            value={inpValues.confPassword}
            onChange={changeHandler}
            autoComplete="off"
          />
          {errors.confPassword && <p>{errors.confPassword}</p>}
        </div>

        <Button>Sign Up</Button>
      </form>
    </Card>
  );
};

export default Form;
