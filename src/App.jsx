

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LogIn from "./components/Users";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Users from "./components/Users"

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <LogIn/>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
