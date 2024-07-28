import React from "react";
import { FaUserCircle, FaUserPlus, FaUserFriends } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./myStyle.css";
import ConersionItem from "./ConersionItem";
import { useState } from "react";
const Sidebar = () => {

    const[conversations,setConversions]=useState([
        {
            name:"test#1",
            lastMessage:"last message",
            timeStamp:"tpday",
        },
        {
            name:"test#1",
            lastMessage:"last message",
            timeStamp:"tpday",
        },
        {
            name:"test#1",
            lastMessage:"last message",
            timeStamp:"tpday",
        }
    ])
  return (
    <div className="side-container">
      <div className="sb-header">
        <FaUserCircle size={25} />
        <div>
          <FaUserPlus size={25} />
          <FaUserFriends size={25} />
          <MdNightlight size={25} />
        </div>
      </div>
      <div className="sc-search">
        <FaSearch />
        <input type="text" placeholder="search" />
      </div>
      <div className="sb-convo">
        {conversations.map((convo)=>{
            return <ConersionItem props={convo}/>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
