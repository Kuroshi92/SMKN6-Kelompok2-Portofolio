import Nav from "../commponents/navbar"
import Footer from "../commponents/footer";
import {useNavigate } from 'react-router-dom';

const Anime = () => {
    const navigate = useNavigate()
    return(
        <div className="bg-gray-800">
            <Nav/>
            <div className="text-white font-bold pb-2 px-2">
                <h1 className="text-2xl pb-1">Anime</h1>
                <hr className="w-full h-1 bg-gray-100 border-0 rounded dark:bg-blue-300"/>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://i.pinimg.com/564x/3e/3b/a4/3e3ba4d763b406b6307d11343b23316e.jpg" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Kono Subarashii sekai ni shukufuku wo! S1</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Harem</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Magic</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Mengisahkan seorang otaku sekaligus hikkikomori bernama Kazuma Satou. Sehari-hari Kazuma menghabiskan harinya hanya berada di dalam kamarnya sambil bermain game. Suatu hari ia harus berhadapan dengan dunia luar, hanya demi membeli sebuah game yang baru di rilis. Sepulang dari perjalanan membeli game tersebut, ia bertemu dengan seorang gadis yang tengah menyebrang jalan. Namun tiba-tiba, ia melihat siluet kendaraan besar yang akan menabrak gadis tersebut. Meski penuh keraguan, ia akhirnya memberanikan diri untuk mendorong gadis tersebut. Sang gadis bisa selamat, tetapi Kazuma justru malah meninggal akibat perbuatannya</p>
                        <div class=" mt-4 flex justify-between">
                            <a onClick={() => navigate('/konosubapage')} class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2023/04/Alice-Aegis-Expansion__.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Alice gear aegis expansion</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Action</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">SCI-FI</li>
                            </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Shitara, Yotsuyu, Kaede, dan Fumika adalah empat orang gadis yang punya kemampuan khusus. Mereka dihadapkan pada pertarungan melawan alien, Vice, yang pernah mendesak umat manusia untuk meninggalkan bumi.</p>
                        <div class=" mt-4 flex justify-between">
                            <a  onClick={() => navigate('/Alicepage')} class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2023/04/In-Another-World-With-My-Smartphone-2__.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">In another world with my smartphone 2</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Adventure</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Romance</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Thriller</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Toya dan para gadisnya mengkesplorasi reruntuhan langit peninggalan Dr. Babylon. Mereka mendirikan negara Brunhild dan menemukan sebuah senjata tempur humanoid untuk melawan monster kristal yang menyerang manusia</p>
                        <div class=" mt-4 flex justify-between">
                            <a onClick={() => navigate('/SmartphonePage')}  class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2023/04/The-Dangers-in-My-Heart__.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">The Dangers in My Heart</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Comedy</li>
                        </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Kyotaro Ichikawa merupakan seorang siswa SMA biasa. Tapi dalam hatinya Dia merasa tersiksa secara psikologis. Dia sering menghabiskan waktu untuk mencari cara mengganggu kehidupan damai Yamada Anna, teman sekelasnya yang ia sukai dan ternyata juga sedikit aneh.</p>
                        <div class=" mt-4 flex justify-between">
                            <a onClick={() => navigate('/')} class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 shadow-md overflow-hidden w-full lg:w-full px-8 py-2 mx-auto mb-4">
                <div class="md:flex bg-white rounded">
                    <div class="md:flex-shrink-0">
                        <img class="h-56 rounded p-2 w-96 object-fill md:h-56 md:w-48" src="https://bacaterus.com/wp-content/uploads/2022/05/One-Piece__.webp" alt="konosuba/img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="block mt-1 text-lg leading-tight font-medium text-black">One Piece</h2>
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        <ul className="flex py-2 text-white">
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Adventure</li>
                            <p className="text-black">&nbsp;/&nbsp;</p>
                            <li className="cursor-pointer bg-cyan-800 rounded-md px-2 hover:text-blue-400 text-sm">Fantasy</li>
                            </ul>

                        </div>
                        <p class="mt-2 text-gray-500 text-sm line-clamp-3">Anime One Piece menceritakan perjalanan Luffy, seorang anak laki-laki yang bertemu bajak laut hebat bernama Shanks, dimana Luffy terinspirasi oleh kehebatan Shanks dan bermimpi suatu hari nanti ingin menjadi bajak laut. Kemudian Shanks menjanjikan Luffy untuk reuni di masa depan dan memberikan topi jeraminya.</p>
                        <div class=" mt-4 flex justify-between">
                            <a href="#" class="mt-[2px] max-h-6 px-2  rounded text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
};

export default Anime;