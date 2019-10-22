import HomePage from './Components/Homepage/HomePage.component'
import Navbar from './Components/Navbar/Navbar.component'
import ShopPage from './Components/Shop/Shop.component'
import Onboarding from './Components/Onboarding/Onboarding.component'
import { Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={Onboarding}/>
      </Switch>
    </div>
  );
}

export default App;
