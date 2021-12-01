import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class AnimalsprotectedIndex extends Component {
    constructor(props){
        super(props)
        
    }
    handleClick = (props)=> {
        console.log(this.props)
    }
    render () {
        const {logged_in,
        new_user_route,
        sign_in_route,
        sign_out_route,
        animals
        }=this.props
        return (
            <React.Fragment>
            <div className="page-body">
            <Row xs={1} md={3} className="g-4">
            <h3>My Favorites</h3>
            <br />
            <br />
        
    
            {animals && animals.map(animal => { 


        return ( 

            <section className="card" key={animal.id}>
                <Col>
                <Card>
                <Card.Img variant="top" src={animal.photo} alt="picture of animal"/>
                <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <br />
                <Card.Text>{animal.description}</Card.Text>
                <NavLink to={`/animalshow/${animal.id}`}>See More </NavLink>
                <br />
                <Button onClick={() => this.props.animalDelete(animal.id)}>Delete Animal</Button>
                </Card.Body>
                </Card>
                </Col>
              </section>
    
            )
            
            })}
            </Row>
            </div>
            </React.Fragment>
        )
    }
}

export default AnimalsprotectedIndex