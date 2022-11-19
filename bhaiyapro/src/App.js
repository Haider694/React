
import './App.css';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Studyindia from './components/studyindia/Studyindia'
import Studyabroaad from './components/studyabroaad/Studyabroaad'
import Contact from './components/contactus/Contact'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className="App bg-emerald-400/10 hid">
      <Router>
        <div className='...'>
        <Navbar/>
        </div>
        <div className='...'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='studyindia' element={<Studyindia/>}/>
          <Route path='studyaboaad' element={<Studyabroaad/>}/>
          <Route path='contectus' element={<Contact/>}/>
        </Routes>
        </div>
        
        
      </Router>
    </div>
  );
}

export default App;
