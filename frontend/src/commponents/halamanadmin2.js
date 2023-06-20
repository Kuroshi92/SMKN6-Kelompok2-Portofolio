import Sidebar from "./halamanadmin";
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserAstronaut} from 'react-icons/fa';
import foto from "../asset/foto2.jpeg";




function admin(){
    return(
        <div className="w-full min-h-screen bg-slate-900 flex flex-row">
            <Sidebar />
            
        </div>
    );
}

export default admin;