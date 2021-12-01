import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AnimalIndex extends Component {
  render() {
    const { animals } = this.props
    return (
      <div className='pt-8'>
        <div className='container'>
          <Row>
            <Col className='col-lg-12'>
              <h3>Adoptable Pets</h3>
              <Row xs={1} md={5} className='g-4'>
                {animals &&
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
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default AnimalIndex
