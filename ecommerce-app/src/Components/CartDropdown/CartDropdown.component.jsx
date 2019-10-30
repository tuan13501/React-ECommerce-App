import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => {
         return <div key={item.id}>{item.name} x {item.quantity}</div>}
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = state => {
  return {cartItems: state.cart.cartItems}
}

export default connect(mapStateToProps)(CartDropDown)