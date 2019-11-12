import React from 'react'
import './CheckoutItem.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ cartItem, clearItem }) => {
  console.log(cartItem)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl}/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)