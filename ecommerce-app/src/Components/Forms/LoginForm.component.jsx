import React from 'react'
import './LoginForm.styles.scss'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class LoginForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      passwordIsVisible: false,
      values: {},
      email: '',
      password: ''
    }
  }
  
  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch (error) {
      console.log(error.message)
    }
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

  toggleVisible = () => {
    this.setState({
      passwordIsVisible: !this.state.passwordIsVisible
    })
  }

  render(){
    // console.log('sign in state', this.state)
    return(
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your remail and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange} 
            label="Email" 
            name="email" 
            value={this.state.email} 
            className="form-input" 
            type="email" 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label="Password" 
            name="password" 
            value={this.state.password} 
            className="form-input" 
            type={this.state.passwordIsVisible ? 'text' : 'password'} 
            required
          />
          <label>
            Toggle Visibility
          <input type="checkbox" onClick={this.toggleVisible}></input>
          </label>
          <div className="buttons">
            <CustomButton >Log In</CustomButton>
            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm