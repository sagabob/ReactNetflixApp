import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app, { signInWithGoogle } from "../auth/base.js";
import { AuthContext } from "../auth/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="app-container">
      <h1>Log in</h1>
      <br />
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" />
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Log in</button>
        <br />
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default withRouter(Login);