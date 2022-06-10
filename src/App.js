import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import NavigationBar from './component/NavigationBar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </Router>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </>
  );
}

export default App;
