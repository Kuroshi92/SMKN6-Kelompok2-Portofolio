import Sidebar from "./halamanadmin";
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAstronaut} from 'react-icons/fa';
import foto from "../asset/foto2.jpeg";
import ContentLeft from "./content/contentleft";



function admin(){
    return(
        <div className="w-full min-h-screen bg-slate-800 flex flex-row">
            <Sidebar />
            <ContentLeft />
            <section className="w-96 bg-slate-700 rounded-tl-[70px] overlow-hidden px-14">
               <div className="pt-12 flex justify-end space-x-9 pb-[50px] ml-30 text-white items-center ">
                <MdNotificationsActive size={25}/>
                <FaUserAstronaut size={25}/>
                <img src={foto} alt="user" className="h-[55px] w-[55px] object-cover rounded-full"/>
                </div> 
                <div class="card" className="bg-slate-800 w-70 flex-2 text-white rounded-lg">
                    <h1 className="text-white pl-[100px] text-xl pt-5">Biodata</h1>
                    <div className="relative p-5 text-white">
                    <div className="text-lg">
                        <div className="text-slate-400 text-base mt-3 mb-3">Nama :</div>
                        <div>Aditya Harisaputro</div>
                        </div>

                    <div className="mt-3 space-y-2 mb-3 ">
                        <div className="text-slate-400 text-base mb-3">Email :</div>
                    <div>-</div>
                    </div>

                    <div className="mt-3">
                        <div className="text-slate-400 text-base mb-3"> Keterangan:</div>
                    <div>Web Developer</div>
                    </div>
                    <div className=" mr-10 mt-3 relative">
                        <div className="text-slate-400 text-base mb-3">Jenis Kelamin :</div>
                        <span>Campuran</span>
                        </div>
                        </div>
                </div>
                </section>
        </div>
    );
}

export default admin;