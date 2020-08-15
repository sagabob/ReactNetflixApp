import React, { useEffect, useState, useContext } from "react";
import "./Nav.css";
import { AuthContext } from "../auth/Auth";
import pRoutes from "../routes/pRoutes";
import { Link } from "react-router-dom";
import app from "../auth/base";

function Nav() {
  const [show, handleShow] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const scrollListner = () => {
    if (window.scrollY > 100) {
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
        {currentUser != null &&
          pRoutes.map((route, i) => (
            <Link to={route.path}>
              <button className="bannerButton">
                <span key={i}>{route.label}</span>
              </button>
            </Link>
          ))}
      </div>
      <div className="userNav">
        {currentUser != null ? (
          <button onClick={() => app.auth().signOut()} className="bannerButton">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button className="bannerButton">Sign In </button>
            </Link>
            <Link to="/login">
              <button className="bannerButton">Log In</button>
            </Link>
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
