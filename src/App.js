import './App.css';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavComp from './Components/NavComp';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';




function App() {
  return (
    <>

    {/* <Demo /> */}
      <div className='App'>
      <Router>
        <NavComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
   
      </Router>

      {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
