import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Button, Form, Input, FormGroup, Ranking } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AnimalsprotectedIndex extends Component {
  handleClick = (props) => {
    console.log(this.props)
  }
  render() {
    const { animals, favorites } = this.props
    console.log('animalsprotectedindex', this.props)
    return (
      <React.Fragment>
        <div className='pt-8'>
          <div className='container'>
            <Row>
              <Col className='col-lg-12'>
                <h3>My Favorite Pets</h3>
                <div className='page-body'>
                  <Row xs={1} md={3} className='g-4'>
                    {favorites &&
                      animals.map((animal) => {
                        return (
                          <Col>
                            <Card>
                              <Card.Img
                                variant='top'
                                src={animal.photo}
                                alt='picture of animal'
                              />
                              <Card.Body>
                                <Card.Title>{animal.name}</Card.Title>
                                <Card.Text>{animal.description}</Card.Text>
                                <NavLink to={`/animalshow/${animal.id}`}>
                                  See More{' '}
                                </NavLink>
                                <Button
                                  onClick={() =>
                                    this.props.animalDelete(animal.id)
                                  }
                                >
                                  Delete Animal
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        )
                      })}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AnimalsprotectedIndex
