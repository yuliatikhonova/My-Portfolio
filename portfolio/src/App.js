import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="cantainer-fluid">
      <Sidebar />
      <div className="main">
        <Router>
          <Navbar />
          <br />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Wrapper>
        </Router>
        <br />
        <Contact />
        <br /><br />
        <Footer />
      </div>

    </div>
  );
}

export default App;
