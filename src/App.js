import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
// eslint-disable-next-line

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blog />} />
          <Route path="*" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
