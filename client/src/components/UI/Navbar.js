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
    localStorage.removeItem("userInfo");
    navigate.push("/login");
  };

  const [isOpen, setOpen] = useState(false);
  const { user } = ChatState();
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div div className="navbar-brand">
          <Link to="/">FarmStack</Link>
          {/* <Link to="/"><img src={process.env.PUBLIC_URL + '/FS.png'} alt="" id="heroimg" /></Link> */}
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
        {/* <div className="navbar-burger" onClick={() => setOpen(!isOpen)}> */}
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
