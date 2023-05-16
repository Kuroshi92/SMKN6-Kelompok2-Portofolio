import Sidebar from "./halamanadmin";
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAstronaut} from 'react-icons/fa';
import foto from "../asset/foto2.jpeg"


function admin(){
    return(
        <div className="w-full min-h-screen bg-slate-800 flex flex-row">
            <Sidebar />
            <section className="flex-1 bg-slate-800 text-white ">Content Left</section>
            <section className="w-96 bg-slate-700 rounded-tl-[70px] overlow-hidden px-14">
               <div className="pt-12 flex justify-end space-x-9 pb-20 text-white items-center ">
                <MdNotificationsActive size={20}/>
                <FaUserAstronaut size={20}/>
                <img src={foto} alt="user" className="h-[55px] w-[55px] object-cover rounded-full"/>
                </div> 
                <div class="card" className="bg-slate-800  flex-2 text-white rounded-lg">
                    <div className="relative p-5 text-white">
                    <div className="text-lg">Aditya Harisaputro</div>

                    <div className="mt-10 space-y-2 mb-3 ">
                    <div>Keterangan Kerjaan</div>
                    </div>

                    <div>08*********68</div>
                    <div className="flex justify-between mt-3 relative">
                        <span>Rekayasa Perangkat Lunak</span>
                        </div>
                        </div>
                </div>
                </section>
        </div>
    );
}

export default admin;