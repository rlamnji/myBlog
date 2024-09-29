import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Stack from "./CSE/stack"; // Stack 컴포넌트가 대문자로 시작해야 함
import Cs from "./CSE/cs";
import Project from "./CSE/project";
import Blender from "./CSE/blender";
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
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
