import React from 'react'
import { connect } from 'react-redux'

import './Checkout.styles.scss'

import CheckoutItem from '../CheckoutItem/CheckoutItem.component'
import StripeCheckoutButton from '../StripeButton/StripeButton.component'

import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'


const CheckoutPage = ({ cartItems, total }) => {
  return(
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        })
      }
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following CC for Test Payment*
        <br />
        <strong>Card #: </strong>4242 4242 4242 4242 <strong>Exp. Date: </strong>01/20 <strong>CVC: </strong> 123
      </div>
      <StripeCheckoutButton price={total}/> 
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)