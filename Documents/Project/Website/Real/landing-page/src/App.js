import React, { Component } from "react";
import "./styles/App.scss";

//All route in here
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./components/Brand";
import Rank from "./components/Rank";

//All component set as default
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/brand" component={Brand} />
            <Route path="/rank" component={Rank} />
            <Route path="/contact" />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
