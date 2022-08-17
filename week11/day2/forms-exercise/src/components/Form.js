import React from "react";
import { useState } from "react";

const Form = () => {
  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const validateInput = (text, name) => {
    switch (name) {
      case "firstName":
        let regex = /\S+@\S+\.\S+/;
        console.log(regex.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "lastName":
        let reg = /\S+@\S+\.\S+/;
        console.log(reg.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "email":
        let regul = /\S+@\S+\.\S+/;
        console.log(regul.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "password":
        let regular = /\S+@\S+\.\S+/;
        console.log(regular.test(text));
        setFormData({ ...formData, [name]: text });
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <div className="form-container">
        <form>
          <div className="nameContainer">
            <input
              name="firstName"
              value={formData.name}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="First Name"
              type="text"
              className="nameSize"
            />
            <input
              name="lastName"
              value={formData.name}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="Last Name"
              type="text"
              className="nameSize"
            />
          </div>
          <div className="otherContainer">
            <input
              name="email"
              value={formData.email}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="Email"
              type="email"
              className="inputSize"
            />
            <input
              name="password"
              value={formData.password}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="Password"
              type="password"
              className="inputSize"
            />
            <input
              type="submit"
              value="Create account"
              className="inputSize"
              id="buttonSubmit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
