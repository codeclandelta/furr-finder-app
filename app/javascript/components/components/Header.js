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
import logo from '../assets/logo-furrfinder-2.png'

class Header extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route, sign_out_route } =
      this.props

    return (
      <React.Fragment>
        <header className='header-area header-sticky wow slideInDown main-wrapper color-teal'>
          <div className='container'>
            <Row>
              <Col>
                <nav className='main-nav'>
                  <NavLink to='/' className='px-4 logo'>
                    <img src={logo} alt='Illustration of a dog and cat' />
                    <span className='fs-1 fw-bold'>Furr Finder</span>
                  </NavLink>
                    <Nav>
                      <NavItem className='scroll-to-section'>
                        <NavLink to='/' className='px-4'>
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem className='scroll-to-section'>
                        <NavLink to='/aboutus' className='px-4'>
                          About Us
                        </NavLink>
                      </NavItem>

                      {!logged_in &&
                      <NavItem className='scroll-to-section'>
                        <a href={new_user_route} className=''>
                          Sign Up
                        </a>
                      </NavItem>
                      }
                      {!logged_in &&
                      <NavItem className='scroll-to-section'>
                        <a href={sign_in_route} className=''>
                          Sign In
                        </a>
                      </NavItem>
                      }
                       {logged_in &&
                      <NavItem className='scroll-to-section'>
                        <NavLink to='/animalsprotectedindex' className='px-4'>
                          Favorites
                        </NavLink>
                      </NavItem>
                      }
                      {logged_in &&
                      <NavItem className='scroll-to-section'>
                        <a href={sign_out_route} className=''>
                          Sign Out
                        </a>
                      </NavItem>
                      }
                    </Nav>
                  <a className='menu-trigger'>
                    <span>Menu</span>
                  </a>
                </nav>
              </Col>
            </Row>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
