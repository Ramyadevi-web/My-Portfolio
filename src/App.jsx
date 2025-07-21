import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
