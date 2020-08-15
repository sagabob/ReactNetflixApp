import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app, { signInWithGoogle } from "../auth/base.js";
import { AuthContext } from "../auth/Auth";
import { Link } from "react-router-dom";
import "./Login.css";

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
    <div className="app-container loginWrapper">
      <div className="login-page">
        <h2 className="sign">Sign In</h2>
        <div className="form">
          <form onSubmit={handleLogin} className="login-form">
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Log in</button>
            <br />
            <br />
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
          </form>
          <br />
          <br />
          <p className="message">
            <span>New to Netflix? </span>
            <Link to="/signup" className="signupButton">
              <b>Sign up now</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
