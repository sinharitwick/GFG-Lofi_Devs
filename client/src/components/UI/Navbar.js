import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";
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
          <Link to="/">FarmStack</Link>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <Link to="/cropadvisor">Predict Crop</Link> 
          {!user ? (
            <>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:cursor-pointer">About</ScrollLink>
            <ScrollLink to="contact" smooth={true} className="hover:cursor-pointer">Contact Us</ScrollLink>
            </>
          ) : (
            <Link to="/feed">Feed</Link>
          )}
          {/* {user && <Link to="/cropadvisor">Predict crop</Link>} */}
          {user && <Link to="/profile">Profile</Link>}
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
