import Footer from "../commponents/footer"
import Nav from "../commponents/navbar"
import {useNavigate } from 'react-router-dom';

const Drakor = () => {
    const navigate = useNavigate()
    return(
        <>
        <div  className="bg-gray-800">
            <Nav/>
            <div className="text-white font-bold pb-2 px-2">
                <h1 className="text-2xl pb-1">Drakor</h1>
                <hr className="w-full h-1 bg-gray-100 border-0 rounded dark:bg-blue-300"/>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2022/02/School-2017_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">School 2017</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Coming Of Age</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Teen</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Song Dae Hwi, Tae Woon, dan Joon Ki merupakan sahabat dekat, hingga sebuah kecelakaan menimpa Joon Ki dan menewaskannya. Kematian sahabatnya tersebut menjadikan Tae Woon dan Dae Hwi renggang, bahkan menjadi musuh.</p>
                        <div class=" mt-4 flex justify-between">
                            <a onClick={() => navigate('/schoolpage')} class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/6MmDGWMLXno" target="_blank">
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2022/01/Who-Are-You-School-2015_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Who Are You : 2015</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Mystery</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Youth</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Lee Eun Bi dan Go Eun Byul adalah saudara kembar yang hidup terpisah. Suatu saat Eun Byul menghilang secara misterius, sedangkan Lee Eun Bi ditemukan di pinggir laut. Eun Bi lalu menjalani hidup sebagai Eun Byul dan terlibat kisah asmara segitiga di sekolahnya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/YoqXPE6qTzo" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/09/yumis-cells_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Yumi's Cells 1</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Pychological</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Yumi adalah seorang wanita pekerja kantoran biasa. Drama ini memperlihatkan bagaimana sel-sel dalam otak Yumi bereaksi terhadap apa yang dialami oleh Yumi, khususnya kisah cintanya dimana sel cinta Yumi sempat koma karena patah hati.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/50YHSCE0D_U" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/08/True-Beauty_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">True Beauty</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romantic Comedy</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Setelah diintimidasi dan didiskriminasi karena penampilannya yang jelek, Ju-kyung yang merupakan seorang siswi SMA mengubah dirinya menjadi "dewi" yang cantik, dan dengan cepat menjadi populer setelah menguasai cara bermake-up melalui video tutorial online.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/GqnQs5ybyq8" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/08/Whats-Wrong-with-Secretary-Kim_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">What's Wrong With Secretary Kim</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Lee Young Joon adalah pemimpin perusahaan yang kesulitan mengurus dirinya sendiri. Beruntung ia memiliki sekretaris yang cakap, Kim Mi So. Ketika Sekretaris Kim hendak mengundurkan diri, Lee Young Joon pun kelabakan.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/e43gG2nC8Cg" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/04/The-Uncanny-Counter-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">The Uncanny Counter</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Fantasy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Mystery</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Thriller</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Menjadi pegawai toko mie di siang hari, dan menjadi pemburu roh jahat di malam hari, para Counters menggunakan kemampuan khusus untuk mengejar roh jahat yang memangsa manusia.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/rI55SRM6uhs" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/09/Hometown-Cha-Cha-Cha_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Hometown Cha-Cha-Cha</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Yoon Hye-Jin adalah dokter gigi. Dia akhirnya pindah ke desa tepi laut Gongjin. Di sana, Yoon Hye-Jin bertemu Hong Du-Sik, pria tampan yang pengangguran tapi selalu terlihat sibuk. Jika seseorang butuh bantuan, Hong Du-Sik adalah orang pertama yang muncul dan siap menolong.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/VOgD00LFsMI" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" >
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/03/100-Days-My-Prince-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">100 Days My Price</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Historial Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romantic Comedy</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Setelah kehilangan ingatannya, Lee Yul, seorang putra mahkota bertemu dengan kehidupan rakyat jelata dan mengalami cinta yang tak terlupakan sebagai suami dari Hong-shim, seorang wanita lajang yang paling tua di wilayahnya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/iBr2LKzW414" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2020/08/Vincenzo_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Vicenzo</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Crime</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Dark Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>   
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Pada usia delapan tahun, Park Joo-hyung diadopsi oleh Don Fabio, sebuah keluarga Italia. Dia kemudian bergabung dengan mafia dan berganti nama menjadi "Vincenzo Cassano". Setelah Don Fabio meninggal, Ia pun kembali ke Seoul karena akan dibunuh oleh putra kandung ayah angkatnya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/1b1-nK0HM9c" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/09/Hotel-del-Luna_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Hotel Del Luna</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Fantasy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Drama ini berkisah tentang seorang wanita yang menjalani hukuman dengan cara harus hidup selama ratusan tahun dan menjalankan sebuah hotel astral yang tak kasat mata.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/iDzR6twXE_E" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/05/Itaewon-Class_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Itaewon Class</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                           <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Park Sae Ro-yi adalah seorang mantan narapidana yang ingin menjadi pengusaha sukses di bidang makanan. Ia pun memulai usahanya dengan membuka bar jalanan di Itaewon, sambil menjalankan misi balas dendam pada keluarga yang bertanggung jawab atas kematian ayahnya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/mj486RGx-vg" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/02/Mr.-Queen-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Mr. Queen</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="md:flex lg:grid-cols-2 w-fit py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Saeguk</li>
                           </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">seorang Koki di Istana Kepresidenan Korea yang pintar memasak namun punya sifat arogan dan playboybernama Jang Bong Hwan. Jang Bong Hwan yang berjiwa bebas suatu ketika mengalami kecelakaan yang membuat dirinya koma dan jiwanya berkelana ke masa lalu. </p>
                        <div class=" mt-4 flex justify-between ">
                            <a href="#" class="mt-[2px] max-h-6 px-2 mr-4 rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/fDPbc761ZyA" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/12/mr-sunshine_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Mr. Sunshine</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">History</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Melodrama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Eugene Choi adalah seorang anak laki-laki yang lahir dalam masa perbudakan Joseon. Setelah insiden Shinmiyangyo 1871, ia berhasil melarikan diri ke Amerika Serikat & menjadi perwira Korps Marinir. Ia lalu kembali ke Joseon untuk sebuah misi & jatuh cinta pada putri bangsawan.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/rPJSo4fhtRU" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2021/11/Goblin_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">GOBLIN</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Fantasy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Dalam usahanya mencari pengantin untuk mematahkan kutukan abadinya, Kim Shin, seorang penjaga jiwa berusia 939 tahun, bertemu dengan malaikat maut dan Ji Eun-tak, seorang siswa yang cerdas dengan masa lalu yang tragis. Ketiganya memiliki masa lalu & takdir yang saling berkaitan.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/S94ukM8C17A" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2020/09/Reply-1988-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Replay 1988</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Family</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Menceritakan tentang kehidupan 5 keluarga yang tinggal di wilayah yang sama di lingkungan bernama Ssangmundong di Seoul. Drama ini mengambil latar nostalgia dengan kembali ke tahun 1988.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/c-EMf3JdxUA" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2020/10/Crash-Landing-on-You-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Crash Landing On You (2019)</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Military</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Political</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Yoon Se Ri, seorang pewaris perusahaan besar di Korea Selatan, mengalami kecelakaan paralayang & jatuh di Korea Utara. Ia lalu ditemukan dan dibantu oleh seorang perwira militer Korea Utara Ri Jung Hyuk. Seiring berjalannya waktu, keduanya pun mulai jatuh cinta.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/TdOOjpVaGRg" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2020/08/SKY-Castle-Movie-Poster_.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Sky Castle (2018)</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Dark Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Family</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Satire</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Kisah dari SKY Castle berpusat pada 4 ibu rumah tangga dan keluarganya yang tinggal di kawasan pemukiman mewah di Seoul bernama Sky Castle. Ibu-ibu ini sangat peduli dengan pendidikan anaknya, hingga mereka rela melakukan apapun demi terjaminnya pendidikan sang anak.
Suatu ketika Han Seo-Jin, seorang ibu penghuni SKY Castle yang mengadakan pesta untuk merayakan keberhasilan anak dari keluarga Park yaitu Young-Jae yang berhasil masuk jurusan kedokteran di Seoul Nation University.
Kisah dari SKY Castle berpusat pada 4 ibu rumah tangga dan keluarganya yang tinggal di kawasan pemukiman mewah di Seoul bernama Sky Castle. Ibu-ibu ini sangat peduli dengan pendidikan anaknya, hingga mereka rela melakukan apapun demi terjaminnya pendidikan sang anak.
Suatu ketika Han Seo-Jin, seorang ibu penghuni SKY Castle yang mengadakan pesta untuk merayakan keberhasilan anak dari keluarga Park yaitu Young-Jae yang berhasil masuk jurusan kedokteran di Seoul Nation University.
Dan ternyata rahasia dibalik keberhasilan Young-Jae adalah tutor pribadi mahal dengan tingkat keberhasilan nyaris sempurna. Ibu-ibu lain pun berlomba-lomba untuk dapat merekrut tutor tersebut sebagai tutor pribadi anaknya,
Dan Han Seo-Jin berhasil mendapatkan tutor privat tersebut untuk anaknya Ye-Suh. Namun, keberhasilannya dalam merekrut tutor mahal itu justru mengundang tragedi yang sangat berbahaya.
</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/P6coIgyV9e0" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://cdn0-production-images-kly.akamaized.net/2KMOXRXaACGBjl9jOQ98X7dS4sI=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3105412/original/096105400_1587141438-The-World-of-the-Married-Poster-5.jpg" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">The world of the married (2020)</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Melodrama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Family</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Thriller</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Ji Sun Woo adalah seorang dokter sekaligus direktur asosiasi di Family Love Hospital. Ia memiliki status dan derajat yang tinggi, dihormati, dan terpandang. Ia juga memiliki keluarga yang bahagia bersama suaminya, Lee Tae Oh, dan putra mereka, Lee Joon Young.
                        Nampaknya, Sun Woo memiliki segalanya, ya? Ternyata, hidup tidak seindah itu. Karena, tanpa sepengetahuannya, ia dikhianati oleh suaminya sendiri (dan juga orang-orang di sekitarnya).
                        Saat perselingkuhan Tae Oh dan Yeo Da Kyung terungkap, Sun Woo sempat berpikir untuk mengusir Tae Oh dari rumah, cerai, dan menjanda. Tapi, pilihannya ini pasti sangat berpengaruh pada anak semata wayangnya. Sun Woo pun dilanda kebingungan untuk memilih antara menyelamatkan pernikahannya, berpisah, dan kebahagiaan anaknya juga.
                        </p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/lKeQKUshcJU" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://i.pinimg.com/564x/98/da/9f/98da9fb820c02e5ed456e2c2217c7e17.jpg" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Blue Birthday</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Fantasi</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Thriller</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Oh ha rin yang menuju masa lalunya melalui foto foto misterius yang ditinggalkan oleh cinta pertamanya yaitu ji seo jun yang meninggal pada hari ulang tahunnya 10 tahun yang lalu.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/k-IlS8iUnlc" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://th.bing.com/th/id/OIP.jwWyb6KJP61KPName2ANGQHaHN?pid=ImgDet&rs=1" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Business Proposal</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Drama</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Menyaru sebagai sobat perempuannya, Ha Ri hadir di kencan buta agar si pria takut. Namun, rencana itu kacau karena si pria ternyata CEO-nya sendiri, yang lalu melamarnya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                            <a href="https://youtu.be/XRU1BtiulXw" target="_blank">
                            <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-[20px] h-[24px] mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                </svg>
                                Tonton Cuplikan Drakor
                            </button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Drakor