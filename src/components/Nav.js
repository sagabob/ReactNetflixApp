import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

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
      <img
        className="navAvatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
