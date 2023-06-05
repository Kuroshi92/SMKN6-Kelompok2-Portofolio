import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Anime from './pages/anime';
import Drakor from './pages/drakor';
import Team from './pages/team';
import Login from './pages/login';
import KonosubaPage from './pagesanime/konosubas1page';
import HomeAdmin from './commponents/halamanadmin2';
import AlicePage from './pagesanime/alicegear';
import SmartphonePage from './pagesanime/smartphone2';
import SchoolPage from './pagesdrakor/school';
import TheDangerPage from './pagesanime/TheDangerMyHeart';
import OnePiecePage from './pagesanime/OnePiece';


function App() {
  
  return (
    <div className='bg-blue-900'>
      <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/drakor' element={<Drakor/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/konosubapage' element={<KonosubaPage/>}/>
          <Route path='/adminpage' element={<HomeAdmin/>}/>
          <Route path='/alicepage' element={<AlicePage/>}/>
          <Route path='/smartphonepage' element={<SmartphonePage/>}/>
          <Route path='/schoolpage' element={<SchoolPage/>}/>
          <Route path='/thedangerpage' element={<TheDangerPage/>}/>
          <Route path='/onepiecepage' element={<OnePiecePage/>}/>

        </Routes>
      </Router>

      </div>
    </div>
    
    
    



  );
  
}

export default App;
