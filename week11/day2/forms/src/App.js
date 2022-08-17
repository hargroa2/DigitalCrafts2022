import "./App.css";
import { useState } from "react";

function App() {
  const defaultForm = {
    name: "",
    password: "",
    address: "",
    email: "",
  };

  const [formData, setFormData] = useState(defaultForm);

  const validateInput = (text, name) => {
    switch (name) {
      case "email":
        let regex = /\S+@\S+\.\S+/;
        console.log(regex.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "name":
        let reg = /^.{5,}$/;
        console.log(reg.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "password":
        let regul = /^.{5,}$/;
        console.log(regul.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "address":
        let regular = /^.{5,}$/;
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
          <input
            name="name"
            value={formData.name}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="name"
            type="text"
          />
          <input
            name="email"
            value={formData.email}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="email"
            type="text"
          />
          <input
            name="password"
            value={formData.password}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="password"
            type="text"
          />
          <input
            name="address"
            value={formData.address}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="address"
            type="text"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
