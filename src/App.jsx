import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <h2>My Projects</h2>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  );
}

export default App;