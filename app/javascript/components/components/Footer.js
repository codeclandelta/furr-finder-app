import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <div className='container-fluid'>
              <h1>Footer</h1>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Footer