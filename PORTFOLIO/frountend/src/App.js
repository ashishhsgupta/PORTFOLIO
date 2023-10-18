import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Registration from './components/Registration/Registration.js';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home.js';
import Qualification from './components/About/Qualification.js';
import Certification from './components/About/Certification.js';
import Project from './components/About/Project.js';
import HTML from './components/Skills/HTML.js';
import CSS from './components/Skills/CSS.js';
import BOOT from './components/Skills/Boot.js';
import JS from './components/Skills/JS.js';
import REACT from './components/Skills/REACT.js';
import DATABASE from './components/Skills/DATABASE.js';
import NODE from './components/Skills/NODE.js';
import GIT from './components/Skills/GIT.js';
import Profile from './components/Home/Profile.js';



function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qualification" element={<Qualification />} /> 
        <Route path="/certification" element={<Certification />} /> 
        <Route path="/project" element={<Project />} /> 
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/boot" element={<BOOT />} />
        <Route path="/js" element={<JS />} />
        <Route path="/react" element={<REACT />} /> 
        <Route path="/database" element={<DATABASE />} /> 
        <Route path="/node" element={<NODE />} /> 
        <Route path="/git" element={<GIT />} /> 
        
        
      </Routes>
    </Router>
  );
}

export default App;
