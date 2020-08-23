import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className=".container-fluid">
      <Sidebar />
      <div className="container">

        <Footer />
      </div>

    </div>
  );
}

export default App;
