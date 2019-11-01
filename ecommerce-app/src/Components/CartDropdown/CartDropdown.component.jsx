import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomButton from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'

const CartDropDown = ({ cartItems }) => {

  const EmptyPage = () => {
    return (
      <div className="empty">
        <h3>Empty</h3>
      </div>
    )
  }

  return (
    <div className="cart-dropdown">
      <div className={`${cartItems.length === 0 ? 'empty-cart' : ''} cart-items`}>
        {cartItems.length === 0
        ? <EmptyPage />
        : cartItems.map(item => {
         return <CartItem key={item.id} item={item}/>
         }
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default connect(mapStateToProps)(CartDropDown)