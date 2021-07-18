import React, { useState } from "react";
import Card from "../../components/Ui/Card/Card";
import "./style.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registerContainer">
      <Card>
        <form>
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
