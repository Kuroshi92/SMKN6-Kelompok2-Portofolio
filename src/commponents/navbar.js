import { useNavigate } from "react-router-dom"
import '../index.css';
import logo from '../asset/logorpl2.png'


function Nav(){
    const navigate = useNavigate()
    window.addEventListener("scroll", function() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("fixed", window.scrollY > 0);
      navbar.classList.toggle("w-full", window.scrollY > 0);
    });
    
    return(
        <div class="navbar z-50">
            <nav class="bg-white border-gray-200 dark:bg-gray-900 h-20 w-full hover: z-50">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a onClick={() => navigate('/')} class="flex items-center">
              <img src={logo} class="h-[55px] mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">AniKor</span>
            </a>
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
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li onClick={() => navigate('/')}>
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
                <li>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => navigate('/login')}>
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Sign in
                    </span>
                  </button>
                </li>
              </ul>  
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Nav