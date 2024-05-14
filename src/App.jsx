

import React from "react";
import {
  createBrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import About from "./components/About"; 
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home"> 
            <Users />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/propertyDetails"> 
            <Users />
          </Route>
        </Switch>

        <Filter />
        <Footer />
      </div>
    </Router>
  );
}

