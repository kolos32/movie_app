import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import "./App.css";

function App() {
  return (
    <HashRouter>
       <Navigation />
       <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;