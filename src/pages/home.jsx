import Anime from "../commponents/comAnime"
import Drakor from "../commponents/comDrakor"
import Footer from "../commponents/footer"
import Nav from "../commponents/navbar"
import gambar1 from "../asset/anikor.png"

const Home = () => {
    return(
        <>
        <div>
            <Nav />
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

export default Home