import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom"

type Props = {
  name: string;
}

function Welcome(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Welcome name="Troy" />
    </div>
  );
}

export default App;
