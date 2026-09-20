
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import './App.css'



function App() {

  return (
    <>
    <Navbar />
   
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App
