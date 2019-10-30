import React from "react";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import CartIcon from "../CartIcon/CartIcon.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";

const Navbar = ({ currentUser, ...props }) => {
  // console.log("toggle cart props", props);
  // console.log(history)
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <h3>SHOP</h3>
        </Link>
        <Link className="option" to="/contact">
          <h3>CONTACT</h3>
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              // history.push('/')
            }}
          >
            <h3>SIGN OUT</h3>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <h3>SIGN IN</h3>
          </Link>
        )}
        <CartIcon />
      </div>
      {!props.hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
  };
};

export default connect(mapStateToProps)(Navbar);
