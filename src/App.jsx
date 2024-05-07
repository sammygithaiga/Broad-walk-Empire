import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './components/Filter'
import NavBar from './components/NavBar'
import SearchPage from './components/SearchPage'
import LogIn from './components/LogIn'

function App() {
  

  return (
    <>
     <Header/>
     <Filter/>
     <NavBar/>
     <SearchPage/>
     <LogIn/>
     <Footer/>
    </>
  )
}

export default App;
