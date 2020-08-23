import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">

        <Contact/>
        <br/><br/>
        <Footer />
      </div>

    </div>
  );
}

export default App;
