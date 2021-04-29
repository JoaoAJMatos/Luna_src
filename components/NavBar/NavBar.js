import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ese-Chain<i className="fas fa-cubes"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 
        )
    }
}

export default NavBar;