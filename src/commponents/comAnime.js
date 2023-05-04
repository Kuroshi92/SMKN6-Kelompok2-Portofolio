import konosuba from '../asset/unnamed.png'
import Alice from '../asset/Alice.jpg'
import smartphone2 from '../asset/smartphone2.jpeg'
import thedangers from '../asset/thedangers.jpeg'
import Onepiece from '../asset/Onepiece.jpeg'
import dmnslyr from '../asset/dmnslyr.jpeg'
import {useNavigate } from 'react-router-dom';
function Anime(){
    const navigate = useNavigate()
    return(
        <div>
            {/* Bagian Content Review Anime */}

            <div> 
                <nav class="bg-white border-gray-200 dark:bg-gray-900 mx-2 my-2 rounded ">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div class="flex items-center">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Daftar Anime</span>
                        </div>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <button href="#" className='bg-blue-400 rounded p-1 shadow-lg shadow-cyan-500/50' onClick={() => navigate('/anime')}>See All</button>
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
                <div class="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth py-4">
                    <div class="flex items-center -mx-1">
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={konosuba} alt="Konosuba/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">Konosuba!</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Harem</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Magic</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Komedi</li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={Alice} alt="Alice/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">Alice gear aegis expansion</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Action</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">SCI-FI</li>
                                    </ul>
                                </div>
                            </div>
                      </div>
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={smartphone2} alt="smartphone2/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">In another world with my smartphone 2</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Adventure</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Comedy</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Romance</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Thriller</li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={thedangers} alt="thedangers/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">The dangers in my heart!</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Comedy</li> 
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={Onepiece} alt="Onepiece/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">One Piece</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Adventure</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Fantasy</li> 
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="w-[340px] md:w-1/2 lg:w-1/4 px-4 mb-8 z-10">
                            <div class="w-[326px] h-64 rounded overflow-hidden shadow-lg bg-white shadow-cyan-600/75">
                                <div className="bg-indigo-300 max-h-fit max-w-fit cursor-pointer hover:scale-105 ease-in duration-300 z-10">
                                    <img className=" cursor-pointer object-fill w-23 h-48" src={dmnslyr} alt="dmnslyr/img"/>
                                </div>
                                <div className="px-2 py-2">
                                    <h2 className="cursor-pointer w-max hover:text-blue-300 font-bold">Demon slayer :kimetsu no yaiba</h2>
                                    <hr className="h-1 bg-gray-300 rounded dark:bg-gray-600"></hr>
                                    <ul className="flex text-gray-900 py-1">
                                        <li className="cursor-pointer hover:text-blue-300">Adventure</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Fantasy</li> <p>&nbsp;/&nbsp;</p>
                                        <li className="cursor-pointer hover:text-blue-300">Martial</li> 
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    </div>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default Anime