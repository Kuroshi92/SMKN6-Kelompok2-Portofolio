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
        
        <div className="h-screen border-r bg-slate-800 border-gray-200 w-64 px-9">
            <div className="flex flex-row pt-7 items-center mb-10">
                <img src={logo} alt="logorpl" className="w-20 h-20"></img>
                <h2 className="self-center text-2xl font-semibold text-white px-3">Anikor</h2>
            </div>
            <div>
            <hr class="bg-gray-600 w-50"></hr>
                <ul>
                {
                    menu.map((val, index) => {
                        return (
                        <li key={index} className="mb-[25px] text-white flex flex-row items-center hover:bg-zinc-600 py-8 w-full cursor-pointer">
                            <div className="mr-5">{val.icon}</div>
                           <div>{val.name}</div> 
                          </li>
                        );
                        
                    })}
                     <hr class="bg-gray-600 w-50"></hr>
                </ul>
              
            </div>
        </div>
     
       
        
                
    );
}




