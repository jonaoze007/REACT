
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Marketing from './components/marketing';
import Testimonials from './components/testimonials';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/marketing" element={<Marketing/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
