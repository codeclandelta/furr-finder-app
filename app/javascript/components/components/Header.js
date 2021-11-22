import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavbarText, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route, sign_out_route } =
      this.props

    return (
      <React.Fragment>
        <header className='main-wrapper color-yellow'>
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
        </header>
      </React.Fragment>
    )
  }
}

export default Header