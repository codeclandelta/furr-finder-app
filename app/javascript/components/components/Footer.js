import React, { Component } from 'react'
import { Navbar, Nav, NavbarText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Footer extends Component {
    render (){
        return (
            <>
            <footer>
        <Navbar color='light' expand='md' light>
          <NavbarText className='px-4'>&copy;2021Furr Finder</NavbarText>
          <NavLink to='/' className='px-4'>
            Home
          </NavLink>
            <Nav className='me-auto' navbar>
                <NavLink to='components/AboutUs' className='px-4'>
                  About Us
                </NavLink>
            </Nav>
             </Navbar>
        </footer>
        </>
    )
  }
}
        

export default Footer