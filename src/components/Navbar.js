import React, { Component } from 'react'
import NavItem from './NavItem'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (x) => {
        if(this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active')
        }
        this.setState({'NavItemId':x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active')
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" activec={this.activeitem} tolink="/"></NavItem>
                    <NavItem item="About" activec={this.activeitem} tolink="/about"></NavItem>
                    <NavItem item="Education" activec={this.activeitem} tolink="/education"></NavItem>
                    <NavItem item="Skills" activec={this.activeitem} tolink="/skills"></NavItem>
                    <NavItem item="Contact" activec={this.activeitem} tolink="/contact"></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar