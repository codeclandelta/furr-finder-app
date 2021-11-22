import React, { Component } from 'react'
import blackCat from '../assets/black-cat.png'
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <section className='vh-100 registration-form'>
          <div className='container h-100'>
            <Row className='row d-flex justify-content-center align-items-center h-100'>
              <Col className='col-lg-12 col-xl-11'>
                <div className='card text-black'>
                  <div className='card-body p-md-5'>
                    <Row className='row justify-content-center'>
                      <Col className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                        <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                          Sign up
                        </p>

                        <Form className='form mx-1 mx-md-4'>
                          <div className='d-flex flex-row align-items-center mb-4'>
                            <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                            <div className='form-outline flex-fill mb-0'>
                              <Input
                                type='text'
                                id='form3Example1c'
                                className='form-control'
                              />
                              <Label
                                className='form-label'
                                htmlFor='form3Example1c'
                              >
                                Your Name
                              </Label>
                            </div>
                          </div>

                          <div className='d-flex flex-row align-items-center mb-4'>
                            <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                            <div className='form-outline flex-fill mb-0'>
                              <Input
                                type='email'
                                id='form3Example3c'
                                className='form-control'
                              />
                              <Label
                                className='form-label'
                                htmlFor='form3Example3c'
                              >
                                Your Email
                              </Label>
                            </div>
                          </div>

                          <div className='d-flex flex-row align-items-center mb-4'>
                            <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                            <div className='form-outline flex-fill mb-0'>
                              <Input
                                type='password'
                                id='form3Example4c'
                                className='form-control'
                              />
                              <Label
                                className='form-label'
                                htmlFor='form3Example4c'
                              >
                                Password
                              </Label>
                            </div>
                          </div>

                          <div className='d-flex flex-row align-items-center mb-4'>
                            <i className='fas fa-key fa-lg me-3 fa-fw'></i>
                            <div className='form-outline flex-fill mb-0'>
                              <Input
                                type='password'
                                id='form3Example4cd'
                                className='form-control'
                              />
                              <Label
                                className='form-label'
                                htmlFor='form3Example4cd'
                              >
                                Repeat your password
                              </Label>
                            </div>
                          </div>

                          <div className='form-check d-flex justify-content-center mb-5'>
                            <Input
                              className='form-check-input me-2'
                              type='checkbox'
                              value=''
                              id='form2Example3c'
                            />
                            <Label
                              className='form-check-label'
                              htmlFor='form2Example3'
                            >
                              I agree all statements in{' '}
                              <a href='#!'>Terms of service</a>
                            </Label>
                          </div>

                          <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                            <Button
                              type='button'
                              className='btn btn-primary btn-lg'
                            >
                              Register
                            </Button>
                          </div>
                        </Form>
                      </Col>
                      <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                        <img
                          src={blackCat}
                          className='blackcat'
                          alt='Black cat illustration'
                        />
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Home