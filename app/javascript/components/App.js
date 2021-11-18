import React, { Component } from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'


import {
  BrowserRouter, 
  Switch,
  Route
}from 'react-router-dom'



class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component = { <Home /> } />

        
      </Switch>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default App
