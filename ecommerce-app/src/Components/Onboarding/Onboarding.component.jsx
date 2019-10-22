import React from 'react'
import LoginForm from '../Forms/LoginForm.component'
import SignupForm from '../Forms/SignupForm.component'
import './Onboarding.styles.scss'

const Onboarding = () => {
  return (
    <div className="onboarding">
      <LoginForm />
      <SignupForm />
    </div>
  )
}

export default Onboarding