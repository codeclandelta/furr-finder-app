import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText,
  Collapse,
  Row,
  Col,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-furr-finder.png'

class Header extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route, sign_out_route } =
      this.props

    return (
      <React.Fragment>
        <Row>
          <Col>
            {/* <header className='main-wrapper color-yellow'>
              <Navbar expand='md'>
                <NavbarText className='px-4 logo'>Furr Finder</NavbarText>
                <NavLink to='/' className='px-4'>
                  Home
                </NavLink>
                <Collapse navbar>
                  <Nav className='me-auto' navbar>
                    <NavItem>
                      <NavLink to='/aboutus' className='px-4 nav-link'>
                        About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <a href={new_user_route} className='nav-link'>
                        Sign Up
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href={sign_in_route} className='nav-link'>
                        Sign In
                      </a>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </header> */}

            {/* <!-- ***** Header Area Start ***** --> */}
            <header
              className='header-area header-sticky wow slideInDown main-wrapper color-teal'
              data-wow-duration='0.75s'
              data-wow-delay='0s'
            >
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12'>
                    <nav className='main-nav'>
                      {/* <!-- ***** Logo Start ***** --> */}
                      <a href='index.html' className='logo'>
                        {/* <img src='assets/images/logo.png' alt='Chain App Dev' /> */}
                        <img
                          src={logo}
                          className='logo'
                          alt='Illustration of a dog and cat'
                        />
                      </a>
                      {/* <!-- ***** Logo End ***** --> */}
                      {/* <!-- ***** Menu Start ***** --> */}
                      <ul className='nav'>
                        <li className='scroll-to-section'>
                          <a href='#top' className='active'>
                            Home
                          </a>
                        </li>
                        <li className='scroll-to-section'>
                          <a href='#services'>Services</a>
                        </li>
                        <li className='scroll-to-section'>
                          <a href='#about'>About</a>
                        </li>
                        <li className='scroll-to-section'>
                          <a href='#pricing'>Pricing</a>
                        </li>
                        <li className='scroll-to-section'>
                          <a href='#newsletter'>Newsletter</a>
                        </li>
                        <li>
                          <div className='gradient-button'>
                            <a id='modal_trigger' href='#modal'>
                              <i className='fa fa-sign-in-alt'></i> Sign In Now
                            </a>
                          </div>
                        </li>
                      </ul>
                      <a className='menu-trigger'>
                        <span>Menu</span>
                      </a>
                      {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Header
