import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Programs from './assets/pages/Programs';
import Contact from './assets/pages/Contact';
import Mission from './assets/pages/Mission';
import Admissions from './assets/pages/Admissions';
import Footer from './footer';
import './style.css';

function App() {
  return (
    
    <div className="App">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/announcements">Announcements</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="login-btn">LOGIN</button>
      </nav>

      <header className="hero">
        <img src="/school.png" className="hero-img" alt="School Banner" />
      </header>

      <main id="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;