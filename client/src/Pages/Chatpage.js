import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;


// import React, {useEffect,useState} from 'react'
// import axios from 'axios';

// function Chatpage() {
// const [chats,setChats]=useState([]);

// const fetchChats=async()=>{
//     const {data}=await axios.get("/api/chat");
//     console.log(data);
// };

// useEffect(()=>{
//     fetchChats();
// },[]);

//   return (
//     <div>
//         {chats.map((chat)=>(
//     <div key={chat._id} >{chat.chatname}</div>
//     ))}
//     </div>
//   );
// };

// export default Chatpage;