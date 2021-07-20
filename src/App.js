import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/AboutPage/About";
import Gallery from "./components/pages/GalleryPage/Gallery";
import Services from "./components/pages/ServicePage/Services";
import Contactus from "./components/pages/ContactPage/Contactus";
import First from "./components/pages/FirstPage/First";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (  
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={First}  />
        <Route path='/home' exact component={Home}  />
        <Route path='/about' exact component={About}/>
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contactus} />
      </Switch>
    </Router>
    
  );
}

export default App;


