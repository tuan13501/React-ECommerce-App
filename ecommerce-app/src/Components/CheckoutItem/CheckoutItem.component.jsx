import React from 'react'
import './CheckoutItem.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addCartItems, removeItem } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ cartItem, clearItem, addCartItems, removeItem }) => {
  console.log(cartItem)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl}/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addCartItems(cartItem)}>&#10095;</div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    addCartItems: item => dispatch(addCartItems(item)),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)