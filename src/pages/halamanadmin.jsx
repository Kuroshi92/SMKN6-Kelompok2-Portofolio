import React from "react";
import logo from '../asset/logorpl2.png';
import {AiOutlineTime,}from "react-icons/ai";
import {HiOutlineUserGroup, HiUserGroup}from "react-icons/hi";

export default function Sidebar(){
    const menu = [
        { name: "Team", icon: <AiOutlineTime/> },
        { name: "Anime", icon: <HiOutlineUserGroup/> },
        { name: "Drakor", icon: <HiUserGroup/> },
    ];

    return (
    <div className="h-screen border-r border-gray-200 w-64 px-9">
        <div className="flex flex-row items-center">
            <img src={logo} alt="logorpl" className="w-9 h-9"></img>
            <div>Anikor</div>
        </div>
        <div>
            <ul>
            <div className="mb-4">Menu</div>
                {menu.map((val, index) => {
                 return (
                     <li key={index} className="mb-7 flex flex-row items-center">
                      <div className="mr-5">{val.icon}</div>
                      <div>{val.name}</div>
                 </li>
                );
                })}
            </ul>
        </div>
    </div>
    );
}