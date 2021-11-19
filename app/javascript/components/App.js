import React, { Component } from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'


import {
  BrowserRouter, 
  Routes,
  Route
}from 'react-router-dom'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animals: []
    }
  }
  render () {
    return (
      
      
      <BrowserRouter>
        <Header {...this.props} />
        <Routes>
          <Route exact path = "/" element = { <Home /> } />
          <Route path = "/aboutus" />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
