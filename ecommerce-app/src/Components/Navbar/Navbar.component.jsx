import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo  } from '../../assets/crown.svg'
import './Navbar.styles.scss'
 
export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo"/>
        </Link>
        <div className="options">
          <Link className="option" to ="/shop">
            <h3>SHOP</h3>
          </Link>
          <Link className="option" to ="/contact">
            <h3>CONTACT</h3>
          </Link>
        </div>
      </div>
    )
  }
}
