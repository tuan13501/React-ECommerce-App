import React from 'react'
import './SignupForm.styles.scss'


class SignupForm extends React.Component{
  constructor(){
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    }
  }

  render(){
    return (
      <div>
        World   
      </div>
    )
  }
}

export default SignupForm