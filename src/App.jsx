import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Home from './pages/Home'

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <div className="app-shell">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;