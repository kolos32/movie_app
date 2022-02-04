import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    // <span>bla-bla-bla</span>
    <HashRouter>
       <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;