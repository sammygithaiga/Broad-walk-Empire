import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LogIn from './components/LogIn';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Router/>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/login" component={LogIn} />
      </Switch>
      <Router/>
      <Filter />
      <Footer />
    </div>
  );
};

export default App;
