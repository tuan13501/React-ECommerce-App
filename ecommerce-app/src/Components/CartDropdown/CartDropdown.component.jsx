import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem.component'

import CustomButton from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => {
         return <CartItem key={item.id} item={item}/>
         }
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