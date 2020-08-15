import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../auth/base";

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
    <div className="app-container">
      <h1>Sign up</h1>
      <br />
      <form onSubmit={handleSignUp}>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
