import React, { Component } from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'


import {
  BrowserRouter, 
  Routes,
  Route
}from 'react-router-dom'



class App extends Component {
  render () {
    return (
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path = "/" element = { <Home /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
