import React from 'react'
import './SignupForm.styles.scss'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignupForm extends React.Component{
  constructor(){
    super()

    this.state = {
      passwordIsVisible: false,
      values: {},
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    
    if(password !== confirmPassword){
        alert('passwords do not match')
        return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, {displayName})

      this.setState({
        passwordIsVisible: false,
        values: {},
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      
    } catch (error) {
      console.log(error.message)
    }
  }

  toggleVisible = () => {
    const { passwordIsVisible} = this.state;
    this.setState({
      passwordIsVisible: !passwordIsVisible
    })
  }

  render(){
    // console.log('sign in state', this.state)

    return (
      <div className="sign-up">
        <h2>I need to create an account.</h2>
        <span>Enter your information to create a new account.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            className="form-input"
            type="text"
            required
          />
          <FormInput 
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            type="text"
            required
          />
          <FormInput 
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            type={this.state.passwordIsVisible ? 'text' : 'password'} 
            isPassword
            required
          />
          <FormInput 
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            type={this.state.passwordIsVisible ? 'text' : 'password'} 
            isPassword
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