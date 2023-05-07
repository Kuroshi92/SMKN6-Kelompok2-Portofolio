import { useNavigate } from "react-router-dom"
import '../index.css';
import logo from '../asset/logorpl2.png'
import React, { useState, useEffect, useRef } from "react";

function NavAdmin(){
    const navigate = useNavigate()
    window.addEventListener("scroll", function() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("fixed", window.scrollY > 0);
      navbar.classList.toggle("w-full", window.scrollY > 0);
    });


    const [isOpen, setIsOpen] = useState(false);
    
    
    return(
        <div class="navbar z-50">
            <nav class="bg-white border-gray-200 dark:bg-gray-900 h-20 w-full hover: z-50">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a onClick={() => navigate('/adminpage')} class="flex items-center">
              <img src={logo} class="h-[55px] mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">AniKor</span>
            </a>
            <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none  hover:bg-gray-900 group">
              <div class ="w-5 h-1 bg-gray-600 mb-1"></div>
              <div class ="w-5 h-1 bg-gray-600 mb-1"></div>
              <div class ="w-5 h-1 bg-gray-600 "></div>
              <div class="absolute top-5 -right-full h-100 w-6/12 bg-gray-900 text-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                <ul class="fkex flex-col items-center w-full text-base pt-0">  
                  <li class="hover:bg-zinc-600 py-8 px-6 w-full cursor-pointer" onClick={() => navigate('/adminpage')}>Home</li>
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
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li onClick={() => navigate('/adminpage')}>
                  <a class="block py-2 pl-3 pr-4 mt-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Home</a>
                </li>
                <li onClick={() => navigate('/team')}>
                  <a class="block py-2 pl-3 pr-4 mt-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Team</a>
                </li>
                <li onClick={() => navigate('/anime')}>
                  <a class="block py-2 pl-3 pr-4 mt-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Anime</a>
                </li>
                <li onClick={() => navigate('/drakor')}>
                  <a class="block py-2 pl-3 pr-4 mt-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Drakor</a>
                </li>
               </ul>  
            </div>
            
            <div className="relative">
      <button
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Tambah Data
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Log-Out
            </a>
          </div>
        </div>
      )}
    </div>
          </div>
        </nav>
        </div>
    )
}

export default NavAdmin