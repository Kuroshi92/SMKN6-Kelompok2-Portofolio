import lgithub from "../asset/logoGitHub.png"
import ltwitter from "../asset/logoTwitter.png"

function Footer(){
    return(
        <div>
            {/* Bagian Footer */}
            <footer className="bg-gray-900 text-white py-7-">
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                    <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-teal-400">P r o j e c t</span> Kelompok 2</h1>
                </div>
                

                
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 text-center mt-10 pt-2 text-gray-400 text-sm pb-8">
                <span>© 2023 Appy. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>

                <div className='flex'>
                <img src={lgithub} alt='logo-github' className='max-h-10 max-w-10 px-5'></img>
                <img src={ltwitter} alt='logo-twitter' className='max-h-10 max-w-10' ></img>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer