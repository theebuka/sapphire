import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
// import About from './pages/about.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;