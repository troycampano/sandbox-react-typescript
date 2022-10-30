import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
