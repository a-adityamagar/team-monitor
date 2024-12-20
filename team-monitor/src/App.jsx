import react from "react";
import LeftNav from "./Components/LeftNav";
import Hero from "./Components/Hero";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LeftNav />
      <Hero />
      <div className="routes"></div>
    </div>
  );
}

export default App;
