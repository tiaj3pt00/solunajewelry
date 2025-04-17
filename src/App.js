import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Getjewelry from './components/Getjewelry';
import Addjewelry from './components/Addjewelry';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Makepayment from './components/Makepayment';
import AboutUs from './components/Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <h1>Soluna Jewelry</h1>
        </header> */}
        <Navbar />
        {/* Create the different urls to the components */}
        <Routes>
          <Route path="/" element={<Getjewelry />} />
          <Route path="/addjewelry" element={<Addjewelry />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/mpesapayment" element={<Makepayment />} />
          <Route path="/*" element={<Notfound />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
