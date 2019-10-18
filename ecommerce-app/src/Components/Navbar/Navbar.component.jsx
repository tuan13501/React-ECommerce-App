import React, { Component } from 'react';
import { Link } from 'react-router-dom'
 
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/shop">
          <h1>Crown</h1>
        </Link>
      </div>
    )
  }
}
