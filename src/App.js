import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Stack from "./CSE/stack"; // Stack 컴포넌트가 대문자로 시작해야 함
import { Home } from "./home";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stack" element={<Stack />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
