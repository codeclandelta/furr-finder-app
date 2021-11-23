import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
    }
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header {...this.props} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutus' component={AboutUs} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
