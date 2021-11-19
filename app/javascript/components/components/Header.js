import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render (){
        const {
            logged_in,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
    
        return (
            <header>
            <h1>Furr Finder</h1>
                <div className = "nav-bar">
                    <ul>
                        <NavLink to = "/"></NavLink>
                    </ul>
                    <ul>
                        <NavLink to = "/aboutus"></NavLink>
                    </ul>
                    <ul>
                        <a href={new_user_route} className ='nav-link'>Sign Up</a>
                    </ul>
                    <ul>
                        <a href={sign_in_route} className ='nav-link'>Sign In</a>
                    </ul>
                </div>
            </header>

        )
    }
}

export default Header