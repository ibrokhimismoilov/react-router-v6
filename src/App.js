import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Blog</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="*" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
