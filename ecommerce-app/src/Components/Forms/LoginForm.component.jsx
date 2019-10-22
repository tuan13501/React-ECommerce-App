import React from 'react'
import './LoginForm.styles.scss'
import FormInput from '../FormInput/FormInput.component'

class LoginForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      values: {},
      email: '',
      password: ''
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      values: {
        email: this.state.email,
        password: this.state.password
      },
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    console.log(this.state)
    return(
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your remail and password.</span>
        <form className="group" onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange} 
            label="email" 
            name="email" 
            value={this.state.email} 
            className="form-input" 
            type="text" 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label="password" 
            name="password" 
            value={this.state.password} 
            className="form-input" 
            type="password" 
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default LoginForm