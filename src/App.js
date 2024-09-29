import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// CSE
import Stack from "./CSE/stack"; 
import Cs from "./CSE/cs";
import Project from "./CSE/project";
import Blender from "./CSE/blender";
// Photobook

//etc.
import Tour from "./etc/tour";
import Content from "./etc/content";

import { Home } from "./home";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/cs" element={<Cs />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blender" element={<Blender />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/content" element={<Content />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
