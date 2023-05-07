import Anime from "../commponents/comAnime"
import Drakor from "../commponents/comDrakor"
import Footer from "../commponents/footer"
import gambar1 from "../asset/anikor.png"
import NavAdmin from "../commponents/navadmin"

const HomeAdmin = () => {
    return(
        <>
        <div>
            <NavAdmin />
            <div className='bg-inherit'>
                <img src={gambar1} className='w-full xl:h-[667px] md:h-full'></img>
            </div>
            <Anime />
            <Drakor />
            <Footer />
        </div>
        </>
        
    )
}

export default HomeAdmin