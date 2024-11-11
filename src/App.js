import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// CSE
import Stack from "./CSE/stack"; 
import Cs from "./CSE/cs";
import Project from "./CSE/project";
import Blender from "./CSE/blender";

// Photobook
import Ss from "./PhotoBook/ss";

//etc.
import Tour from "./etc/tour";
import Content from "./etc/content";
import ContentM from "./etc/contentModify";
import Upload from "./etc/upload";

import { Home } from "./home";
import { BlogProvider } from './etc/blogProvider';

function App() {
  return (
    <BrowserRouter>
    <BlogProvider>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/cs" element={<Cs />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blender" element={<Blender />} />

      <Route path="/tour" element={<Tour />} />
      <Route path="/content" element={<Content />} />
      <Route path="/content_edit" element={<ContentM />} />
      <Route path="/content/upload" element={<Upload />} />

      <Route path="/photoSS" element={<Ss />} />
      </Routes>
    </div>
    </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
