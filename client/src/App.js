// import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Landing from "./components/UI/Landing";
import CropInputForm from "./Pages/cropAdvisor";
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";
import UserProfile from "./Pages/UserProfile";
import Feed from "./Pages/Feed";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cropadvisor" element={<CropInputForm />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
