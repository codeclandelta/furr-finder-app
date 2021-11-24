import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Row, Col} from 'reactstrap'
import Card from 'react-bootstrap/Card'

class AnimalShow extends Component{
    render(){
        const {animal}=this.props

        return(
            <React.Fragment>
                <h3>Animal Information</h3>
                <Row xs={1} md={1} className="g-4">
                {animal &&
                      <Col>
                            <Card>
                                <Card.Img variant="top" src={animal.photo} alt="picture of animal"/>
                                <Card.Body>
                                    <Card.Title>{animal.name}</Card.Title>
                                    <Card.Text>Status: {animal.status}</Card.Text>
                                    <Card.Text>Species: {animal.species}</Card.Text>
                                    <Card.Text>Breed: {animal.breed}</Card.Text>
                                    <Card.Text>Age: {animal.age}</Card.Text>
                                    <Card.Text>Gender: {animal.gender}</Card.Text>
                                    <Card.Text>Size: {animal.size}</Card.Text>
                                    <Card.Text>Description: {animal.description}</Card.Text>
                                    <Card.Text>Spayed/Nutered: {(animal.spayed_neutered).toString()}</Card.Text>
                                    <Card.Text>House Trained: {(animal.house_trained).toString()}</Card.Text>
                                    <Card.Text>Special Needs: {(animal.special_needs).toString()}</Card.Text>
                                    <Card.Text>Contact Us: {animal.contact_info}</Card.Text>
                                    <Card.Text>Location: {animal.contact_location}</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                         }
                 </Row>        
                   <Button><NavLink to = "/animalsindex">Back</NavLink></Button>
                   <br />
                    <Button>Add to Favorites</Button>
                    <br />
                    <Button>Sign Up</Button>
              </React.Fragment>
        )
    }
}
export default AnimalShow