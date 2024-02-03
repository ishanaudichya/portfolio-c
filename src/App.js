import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./components/Techstack/Techstack.js";
import Snakegame from "./components/Snakegame";
function App() {
  const [load, upadateLoad] = useState(true);
  window.console.log = () => {};
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const [gameActive, setGameActive] = useState(false);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar setGameActive={setGameActive} />
        <ScrollToTop />

        {gameActive && <Snakegame setGameActive={setGameActive} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techstack" element={<Techstack />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
