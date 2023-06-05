import React from "react";
import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate()
    window.addEventListener("scroll", function() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("fixed", window.scrollY > 0);
      navbar.classList.toggle("w-full", window.scrollY > 0);
    });
    

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
            <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none  hover:bg-gray-900 group">
              <div class ="w-5 h-1 bg-gray-600 mb-1"></div>
              <div class ="w-5 h-1 bg-gray-600 mb-1"></div>
              <div class ="w-5 h-1 bg-gray-600 "></div>
              <div class="absolute top-5 -right-full h-100 w-6/12 bg-gray-900 text-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                <ul class="fkex flex-col items-center w-full text-base pt-0">  
                  <li class="hover:bg-zinc-600 py-8 px-6 w-full cursor-pointer" onClick={() => navigate('/')}>Home</li>
                  <hr class="bg-gray-600 w-full"></hr>
                  <li class="hover:bg-zinc-600 py-8 px-6 w-full cursor-pointer" onClick={() => navigate('/team')}>Team</li>
                  <hr class="bg-gray-600 w-full"></hr>
                  <li class="hover:bg-zinc-600 py-8 px-6 w-full cursor-pointer" onClick={() => navigate('/anime')}>Anime</li>
                  <hr class="bg-gray-600 w-full"></hr>
                  <li class="hover:bg-zinc-600 py-8 px-6 w-full cursor-pointer" onClick={() => navigate('/drakor')}>Drakor</li>
                  <hr class="bg-gray-600 w-full"></hr>
                </ul>
              </div>
            </button>
            
        </div>
     
       
        
                
    );
}




