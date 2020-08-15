import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../auth/base";
import "./Login.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="app-container loginWrapper">
      <div className="login-page">
        <h2>Sign up</h2>
        <div className="form">
          <form onSubmit={handleSignUp}>
            <input name="username" type="text" placeholder="Username" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
