import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import Women from './pages/Women';
// import Men from './pages/Men';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Women /> */}
      {/* <Men /> */}
      {/* <Footer /> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
