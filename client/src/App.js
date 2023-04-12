// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
// import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Landing from "./components/UI/Landing";
import CropInputForm from "./Pages/cropAdvisor";
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";
import UserProfile from "./Pages/UserProfile";
import Feedpage from "./Pages/Feedpage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cropadvisor" element={<CropInputForm />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/chats" element={<Chatpage />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/feed" element={<Feedpage />} />
        </Routes>
    </div>
  );
}

// {/* <Route path="/register" element={<Signup/>}/>
// <Route path="/login" element={<Login/>}/> */}
// {/* <Router path="*" element={<Error404 />}/> */}
export default App;
