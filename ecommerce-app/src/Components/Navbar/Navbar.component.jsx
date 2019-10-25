import { ReactComponent as Logo  } from '../../assets/crown.svg'
import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.styles.scss'
import { auth } from '../../firebase/firebase.utils'


const Navbar = ({currentUser, history}) =>{
  // console.log(history)
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
        {
          currentUser
          ? <div className="option" onClick={() => {
            auth.signOut();
            history.push('/')
            }}>
              <h3>SIGN OUT</h3>
            </div>
          : <Link className="option" to ="/signin">
              <h3>SIGN IN</h3>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar