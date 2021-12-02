import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import AnimalsIndex from './pages/AnimalsIndex'
import AnimalShow from './pages/AnimalShow'
import AnimalsprotectedIndex from './pages/AnimalsprotectedIndex'


import AdoptionForm from './pages/AdoptionForm'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
      favorites: [],
    }
  }

  componentDidMount() {
    this.animalRead(),
    this.favoritesRead()

  }

  animalRead = () => {
    fetch('/animals')
      .then((response) => response.json())
      .then((payload) => this.setState({ animals: payload }))
      .catch((errors) => console.log('Animals read errors', errors))
  }

  favoritesRead = () => {
    fetch('/favorites')
      .then((response) => response.json())
      .then((payload) => this.setState({ favorites: payload }))
      .catch((errors) => console.log('favorites read errors', errors))
  }

  favoriteDelete = (id, animal_id, user_id) => {
    fetch(`favorites/${id}`, {
      body: JSON.stringify({ animal_id, user_id }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.favoritesRead())
    .catch(errors => console.log("delete errors:", errors))
  }
  
  render() {
  const {animals, favorites} = this.state
  console.log("favorites",favorites)
  const {current_user} = this.props
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header {...this.props} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutus' component={AboutUs} />
            <Route
              path='/animalsindex'
              render={() => <AnimalsIndex animals={animals} />}
            />
            <Route path="/animalshow/:id"
            render={(props)=>{
              let id = +props.match.params.id
              let animal = this.state.animals.find(a=>a.id === +id)
              return <AnimalShow animal={animal} current_user = {current_user}/>
            }} /> 
            
             {this.props.logged_in &&
            <Route path="/animalsprotectedindex" render={(props) => {
              let id = props.match.params.id
              let favorites = this.state.favorites
            return <AnimalsprotectedIndex animals={animals} favorites={favorites} favoriteDelete={this.favoriteDelete} />
            }}/>
            
            }
          
           
            <Route path='/adoptionform' component={AdoptionForm} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App
