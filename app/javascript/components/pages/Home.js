import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Nav,
} from 'reactstrap'
import sliderRight from '../assets/slider-right.png'
import Image from 'react-bootstrap/Image'
import { NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Home extends Component {
 

 
  render() {
    return (
      <React.Fragment>
        <div
          className='main-banner wow fadeIn'
          id='top'
          data-wow-duration='1s'
          data-wow-delay='0.5s'
        >
          <div className='container'>
            <Row>
              <Col className='col-lg-12'>
                <Row>
                  <Col className='col-lg-6 align-self-center'>
                    <div className='left-content show-up header-text wow fadeInLeft'>
                      <Row>
                        <Col className='col-lg-12'>
                          <h2>Welcome to Furr Finder</h2>
                          <p>
                            Get Personalized Pet Matches. Answer a few quick
                            questions to see your perfect matches on Furr
                            Finder.
                          </p>
                        </Col>
                        <Col className='col-lg-12'>
                          <Nav>
                            <NavItem className='white-button first-button scroll-to-section'>
                              <NavLink to='./animalsindex'>Dogs</NavLink>
                            </NavItem>
                            <NavItem className='white-button scroll-to-section'>
                              <NavLink to='./animalsindex'>Cats</NavLink>
                            </NavItem>
                            <NavItem className='white-button scroll-to-section'>
                              <NavLink to='./animalsindex'>Rabbits</NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className='col-lg-6'>
                    <div className='right-image wow fadeInRight'>
                      <img
                        src={sliderRight}
                        alt='Illustration of a smiling dog running in the grass'
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
