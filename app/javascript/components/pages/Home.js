import React, { Component } from 'react'
import blackCat from '../assets/black-cat.png'
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap'

class Home extends Component {
  
    state = {
      searchTerm: ''
    }
  handleChange = (value) => {
    this.setState ({searchTerm: value})  
  }

  handleClick = () => {
    console.log('handleClick');
    console.log(this.state);
    fetch("https://api.petfinder.com/v2/animals")
    .then(response => console.log(response))
  }

  render() {
    
    return (

      <React.Fragment>
        <h1>Home Page</h1>
        <Input type="text"
          onChange = {(e) => this.handleChange(e.target.value)}
          ></Input>
        <Button onClick = {() => this.handleClick()} 
        >Submit</Button>
      </React.Fragment>
    )
  }
}

export default Home