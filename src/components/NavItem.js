import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <Link id={this.props.item} 
                to={this.props.tolink} 
                onClick={ () => {
                    console.log(this.props);
                    this.props.activec.bind(this, this.props.item)
                }
            }>
                <li>{this.props.item}</li>
            </Link>
        )
    }
}

export default NavItem