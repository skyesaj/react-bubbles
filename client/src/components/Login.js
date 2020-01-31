import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login)
      .then(response => {
        console.log(console.log("login response ", response.data));
        localStorage.setItem("token", response.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
