import HomePage from './Components/Homepage/HomePage.component'
import Navbar from './Components/Navbar/Navbar.component'
import ShopPage from './Components/Shop/Shop.component'
import Onboarding from './Components/Onboarding/Onboarding.component'
import { Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log('OAuth user', user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
        <Route path="/" render={(props) => {
          return <Navbar currentUser={this.state.currentUser} {...props}/> 
        }}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={Onboarding}/>
        </Switch>
      </div>
    );
  }
}

export default App;
