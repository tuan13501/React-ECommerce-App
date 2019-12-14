import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { stripePublishableKey } from '../../assets/StripePublicKey'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = stripePublishableKey

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }


  return (
    <StripeCheckout
      label="Pay With Stripe"
      name="CRWN StreetWear"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton