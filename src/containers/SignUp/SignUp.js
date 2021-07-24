import React, { useState } from "react";
import Card from "../../components/Ui/Card/Card";
import "./style.css";
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions/index';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(actions.signUp(userData));

  };

  return (
    <div className="registerContainer">
      <Card>
        <form onSubmit={(e)=>registerUser(e)}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
