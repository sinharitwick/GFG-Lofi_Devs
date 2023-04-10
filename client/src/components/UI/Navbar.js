import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
const Navbar = () => {
  // let location = useLocation();
  let navigate = useHistory();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate.push("/login");
  };

  // const handleLogout = async () => {
  //   try {
  //     // Send a request to the server to invalidate the token
  //     const response = await fetch("/api/user/logout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });

  //     // If the request is successful, remove the token from localStorage and redirect to the login page
  //     if (response.ok) {
  //       localStorage.removeItem("userInfo");
  //       navigate.push("/login");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [isOpen, setOpen] = useState(false);
  const { user } = ChatState();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">F a r m S t a c k</Link>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <Link to="/feed">Post</Link>
          <Link to="/about">About</Link>
          {user && <Link to="/cropadvisor">Predict crop</Link>}
          {user && <Link to="/user">Profile</Link>}
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <p onClick={handleLogout} className="btn btn-primary">
              Logout
            </p>
          )}
        </div>
        <div className="navbar-burger" onClick={() => setOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
