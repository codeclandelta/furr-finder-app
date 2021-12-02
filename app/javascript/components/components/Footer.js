import React, { Component } from 'react'
import { Navbar, Nav, NavbarText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer mt-auto py-3 bg-light'>
          <Navbar color='light' expand='md' light>
            <NavbarText className='px-4'>&copy;2021 Furr Finder</NavbarText>
            <NavLink to='/' className='px-4'>
              Home
            </NavLink>
            <Nav className='me-auto' navbar>
              <NavLink to='/aboutUs' className='px-4'>
                About Us
              </NavLink>
              <NavLink to='/privacy' className='px-4'>
                Privacy
              </NavLink>
              <NavLink to='/terms' className='px-4'>
                Terms of Service
              </NavLink>
            </Nav>
          </Navbar>
        </footer>
      </>
    )
  }
}

export default Footer
