import { Routes, Route} from 'react-router-dom';
import React from 'react';
import  Home from '../src/pages/Home';
import ServicePage from '../src/pages/ServicePage01';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <Routes>

      <Route path ="/" element = {<Home/>}></Route>
      <Route path ="/services" element ={<ServicePage/>}></Route>
<<<<<<< HEAD
=======
      
>>>>>>> 6f07bd7c4a22e45c858de1e99c8987a6800b5a3d
     <Route path = "/aboutus" element= {<Aboutus/>}></Route>
     <Route path = "/contact" element={<Contact/>}></Route>
     <Route path ="/portfolio" element={<Portfolio/>}></Route>
    
    </Routes>
  );
}

export default App;
