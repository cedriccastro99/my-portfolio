import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import NavigationBar from './component/NavigationBar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
        {/* <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes> */}
    </Router>
  );
}

export default App;
