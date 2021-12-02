import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Button, Row, Col, Nav, NavItem } from 'reactstrap'
import Card from 'react-bootstrap/Card'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class AnimalShow extends Component {
  handleClick = (props) => {
    console.log('label', this.props)
    fetch('/favorites', {
      body: JSON.stringify({ id: this.props.animal.id }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          alert('Added to Favorites.')
        }
        return response.json()
      })
      .catch((errors) => console.log('create errors:', errors))
  }
  render() {
    const { logged_in, new_user_route, sign_in_route, animal } = this.props

    return (
      <React.Fragment>
        <div className='pt-8 animal-details'>
          <div className='container'>
            <h3>Animal Information</h3>
            <Row xs={1} md={1} className='g-4'>
              {animal && (
                <Col>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={animal.photo}
                      alt='picture of animal'
                    />
                    <Card.Body>
                      <Row>
                        <Col className='col-md-7'>
                          <Card.Title>{animal.name}</Card.Title>
                        </Col>
                        <Col className='col-md-5'>
                          <Nav>
                            <NavItem>
                              <Button>
                                <NavLink to='/animalsindex'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    class='bi bi-arrow-left-circle-fill'
                                    viewBox='0 0 16 16'
                                  >
                                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                                  </svg>{' '}
                                  Back
                                </NavLink>
                              </Button>
                            </NavItem>
                            <NavItem>
                              <Button onClick={() => this.handleClick()}>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='16'
                                  height='16'
                                  fill='currentColor'
                                  class='bi bi-heart'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
                                </svg>{' '}
                                Add to Favorites
                              </Button>
                            </NavItem>
                            {logged_in && (
                              <NavItem>
                                <NavLink
                                  to='{new_user_route}'
                                  className='nav-link'
                                >
                                  <Button>Sign Up</Button>
                                </NavLink>
                              </NavItem>
                            )}
                            {/* <a href={new_user_route} className='nav-link'>
                              Sign Up
                              </a> */}
                          </Nav>
                        </Col>
                      </Row>
                      <Card.Text>Status: {animal.status}</Card.Text>
                      <Card.Text>Species: {animal.species}</Card.Text>
                      <Card.Text>Breed: {animal.breed}</Card.Text>
                      <Card.Text>Age: {animal.age}</Card.Text>
                      <Card.Text>Gender: {animal.gender}</Card.Text>
                      <Card.Text>Size: {animal.size}</Card.Text>
                      <Card.Text>Description: {animal.description}</Card.Text>
                      <Card.Text>
                        Spayed/Nutered: {animal.spayed_neutered.toString()}
                      </Card.Text>
                      <Card.Text>
                        House Trained: {animal.house_trained.toString()}
                      </Card.Text>
                      <Card.Text>
                        Special Needs: {animal.special_needs.toString()}
                      </Card.Text>
                      <Card.Text>Contact Us: {animal.contact_info}</Card.Text>
                      <Card.Text>Location: {animal.contact_location}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default AnimalShow
