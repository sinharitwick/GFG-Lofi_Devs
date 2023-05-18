import React, { useState, useEffect } from "react";
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
  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
    
  return (
    <nav className={`h-16 w-full navbar bg-white ${stickyClass}`}>
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
