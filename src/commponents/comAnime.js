import {dataAnime} from "../asset/dataanime"
import {useNavigate } from 'react-router-dom';
function Anime(){
    const navigate = useNavigate()
    return(
        <div>
            {/* Bagian Content Review Anime */}

            <div> 
                <nav class="bg-white border-gray-200 dark:bg-gray-900 mx-2 my-2 rounded      ">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div class="flex items-center">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anime Riview</span>
                        </div>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <button href="#" className='bg-blue-400 rounded p-1 shadow-lg shadow-cyan-500/50'>See All</button>
                        </button>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <button href="#" className='bg-cyan-500 rounded p-1 shadow-lg shadow-cyan-500/50' onClick={() => navigate('/anime')}>See All</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='flex items-center'>
                    <div id='slider' className='w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth'>
                        {dataAnime.map((item) => (
                            <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'></img>
                        ) )}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Anime