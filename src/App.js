import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Anime from './pages/anime';
import Drakor from './pages/drakor';
import Team from './pages/team';
import Login from './pages/login';


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
        </Routes>
      </Router>
      </div>
    </div>
    
    
    



  );
  
}

export default App;
