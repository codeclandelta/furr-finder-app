import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {Row, Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class AnimalIndex extends Component {
    render () {
        const {animals} = this.props
        return (
        <div className="page-body">
            <h3>Adoptable Pets</h3>
          
            <Row xs={1} md={3} className="g-4">
                
                    
                    {animals && animals.map(animal => { 

                        return ( 
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={animal.photo} />
                                <Card.Body>
                                    <Card.Title>{animal.name}</Card.Title>
                                    <Card.Text>{animal.description}</Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>

                        )
                    })}
                    
                    
                 
    
            </Row>
        </div>
        )
    }
}

export default AnimalIndex