import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import AnimalsIndex from './pages/AnimalsIndex'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    this.animalRead()
  }

  animalRead = () => {
    fetch('/animals')
    .then(response => response.json())
    .then(payload => this.setState({ animals: payload}))
    .catch(errors => console.log('Animals read errors', errors))
  }

  render() {
    const {animals} = this.state
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header {...this.props} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path="/animalsindex" 
              render={() => <AnimalsIndex animals={animals} />}
            />

          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
