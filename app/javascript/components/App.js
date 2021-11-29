import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import AnimalsIndex from './pages/AnimalsIndex'
import AnimalShow from './pages/AnimalShow'
import AnimalsprotectedIndex from './pages/AnimalsprotectedIndex'
import ReactDOM from 'react-dom'
import Rails from "@rails/ujs"



import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AnimalprotectedIndex from './pages/AnimalsprotectedIndex'

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
            <Route path="/animalshow/:id"
            render={(props)=>{
              let id = props.match.params.id
              let animal = this.state.animals.find(a=>a.id === +id)
              return <AnimalShow animal={animal} />
            }} />  {this.props.logged_in &&
            <Route path="/myanimals" render={(props) => {
              let animals = this.state.animals.filter(a => a.user_id === this.props.current_user.id)
              return <ProtectedIndex animals={animals} deleteAnimal={this.deleteAnimal} />
            }}/>
          }
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App
