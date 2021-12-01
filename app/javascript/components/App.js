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


import AdoptionForm from './pages/AdoptionForm'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
    }
  }

  componentDidMount() {
    this.animalRead()
  }

  animalRead = () => {
    fetch('/animals')
      .then((response) => response.json())
      .then((payload) => this.setState({ animals: payload }))
      .catch((errors) => console.log('Animals read errors', errors))
  }
  animalCreate = (animalsprotectedindex) => {
    fetch("/animals", {
      body: JSON.stringify(animalsprotectedindex),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.animalRead())
    .catch(errors => console.log("create errors:", errors))
  }
  animalDelete = (id) => {
    fetch(`animals/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.animalRead())
    .catch(errors => console.log("delete errors:", errors))
  }
  render() {
    const {animals} = this.state
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
              let animals = this.state.animals.filter(a => a.user_id === this.props.current_user.id)
              return <AnimalsprotectedIndex animals={animals} animalDelete={this.animalDelete} />
            }}/>
            
            }
            {this.props.logged_in &&
              <Route path="/animalsprotectedindex" render={(props) => {
                return <AnimalsprotectedIndex animalCreate={this.animalCreate} current_user={this.props.current_user} />
            }}/>
          }
            <Route
              path='/animalshow/:id'
              render={(props) => {
                let id = props.match.params.id
                let animal = this.state.animals.find((a) => a.id === +id)
                return <AnimalShow animal={animal} />
              }}
            />
            <Route path='/adoptionform' component={AdoptionForm} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App
