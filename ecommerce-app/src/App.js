import HomePage from './Components/Homepage/HomePage.component'
import Navbar from './Components/Navbar/Navbar.component'
import ShopPage from './Components/Shop/Shop.component'
import Onboarding from './Components/Onboarding/Onboarding.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react';
import './App.css';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log('user auth' , userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        //  console.log('user on app state', this.state)
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar someProp="checking props"/> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={(props) => {
            if(this.props.currentUser){
              return <Redirect to="/"/>
            } else {
              return <Onboarding {...props}/> 
            }
          }} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)