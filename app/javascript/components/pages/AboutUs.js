import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='about' className='about section-bg'>
          <div className='container' data-aos='fade-up'>
            <Row className='no-gutters'>
              <Col className='content col-xl-5 d-flex align-items-stretch'>
                <div className='content'>
                  <h1>About Us</h1>
                  <h3>Mission Statement</h3>
                  <p>
                    Our goal at Furr Finder is to find a FURRever home for all
                    pets placed in animal shelters. Each year there are over
                    hundreds of thousands of animals that are put down at
                    shelters due to the fact there are too many pets and not
                    enough space to keep them all. Our goal at Furr Finder is to
                    make it easier for people to adopt shelter animals and
                    support local community shelters. Remember to ADOPT don't
                    SHOP!!
                  </p>
                </div>
              </Col>
              <Col className='col-xl-7 d-flex align-items-stretch'>
                <div className='team d-flex flex-column justify-content-center'>
                  <Row>
                    <h3>Furr Finder Founders</h3>
                    <Col className='col-md-6 team-member'>
                      <h4>Mayuri</h4>
                      <h6>Project Manager</h6>
                      <p>Bio...</p>
                    </Col>
                    <Col className='col-md-6 team-member'>
                      <h4>Marisa</h4>
                      <h6>Tech Lead</h6>
                      <p>Bio...</p>
                    </Col>
                    <Col className='col-md-6 team-member'>
                      <h4>Napoleon</h4>
                      <h6>Product Manager</h6>
                      <p>Bio...</p>
                    </Col>
                    <Col className='col-md-6 team-member'>
                      <h4>John</h4>
                      <h6>Design Lead</h6>
                      <p>Bio...</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default AboutUs
