import React from 'react'
import './SignupForm.styles.scss'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'


class SignupForm extends React.Component{
  constructor(){
    super()

    this.state = {
      passwordIsVisible: false,
      values: {},
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      values: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
    })
  }

  toggleVisible = () => {
    this.setState({
      passwordIsVisible: !this.state.passwordIsVisible
    })
  }

  render(){
    console.log('sign in state', this.state)

    return (
      <div className="sign-up">
        <h2>I need to create an account.</h2>
        <span>Enter your information to create a new account.</span>
        <form>
          <FormInput 
            name="firstName"
            value={this.state.firstName}
            handleChange={this.handleChange}
            label="First Name"
            className="form-input"
            type="text"
            required
          />
          <FormInput 
            name="lastName"
            value={this.state.lastName}
            handleChange={this.handleChange}
            label="Last Name"
            type="text"
            required
          />
          <FormInput 
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            type="email"
            required
          />
          <FormInput 
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            type={this.state.passwordIsVisible ? 'text' : 'password'} 
            required
          />
          <label>
            Toggle Visibility
          <input type="checkbox" onClick={this.toggleVisible}></input>
          </label>
          <div className="buttons">
            <CustomButton >Sign Up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm