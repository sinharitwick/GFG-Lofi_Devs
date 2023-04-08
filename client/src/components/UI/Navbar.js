import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
const Navbar = () => {
  // let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

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
