import React from "react";
import logo from '../asset/logorpl2.png';
import {MdOutlineGroups,}from "react-icons/md";
import {FaVimeoV,}from "react-icons/fa";
import {FaPlayCircle,}from "react-icons/fa";

export default function Sidebar(){
    const menu = [
        { name: "Team", icon: <MdOutlineGroups/> },
        { name: "Anime", icon: <FaPlayCircle/> },
        { name: "Drakor", icon: <FaVimeoV/> },
    ];

    return (
    <div className="h-screen border-r border-gray-200 w-50 px-9 text-white">
        <div className="flex flex-row items-center">
            <img src={logo} alt="logorpl" className="w-20 h-20"></img>
            <h1 className="px-5 text-white  text-2xl font-semibold">Anikor</h1>
        </div>
        <div className="pt-10">
            <ul>
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