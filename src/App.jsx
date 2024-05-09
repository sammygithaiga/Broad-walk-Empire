

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
import Users from "./components/Users"; 
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users"> 
            <Users />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Filter />
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <SearchBar />;
}
