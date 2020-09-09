import React, { useEffect, useState, useContext } from "react";
import "./Nav.css";
import { AuthContext } from "../auth/Auth";
import routes from "../routes/PublicRoutes";
import { NavLink } from "react-router-dom";
import app from "../auth/base";

function Nav() {
  const [show, handleShow] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const scrollListner = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <div className={show ? "nav navBlack" : "nav"}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <div className="privateLinkNav">
        {routes.map((route, i) =>
          currentUser != null
            ? route.isNav && (
                <NavLink
                  to={route.path}
                  activeClassName="is-active"
                  key={i}
                  className="navButton"
                >
                  {route.label}
                </NavLink>
              )
            : !route.isPrivate &&
              route.isNav && (
                <NavLink
                  to={route.path}
                  activeClassName="is-active"
                  key={i}
                  className="navButton"
                >
                  {route.label}
                </NavLink>
              )
        )}
      </div>
      <div className="userNav">
        {currentUser != null ? (
          <button onClick={() => app.auth().signOut()} className="navButton">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink
              to="/signup"
              activeClassName="is-active"
              className="navButton"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="is-active"
              className="navButton"
            >
              Log In
            </NavLink>
          </>
        )}
      </div>
      {currentUser != null ? (
        <img
          className="navAvatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix Logo"
        />
      ) : null}
    </div>
  );
}

export default Nav;
