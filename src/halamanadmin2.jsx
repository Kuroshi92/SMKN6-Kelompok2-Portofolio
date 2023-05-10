import Sidebar from "./pages/halamanadmin";


function admin() {
    return(
        <div className="w-full min-h-screen bg-white flex flex-row">
            <Sidebar/>
            <section className="flex-1 text-white w-64">content left</section>
            <section className="flex-1">content right</section>
        </div>
    );
}

export default admin;