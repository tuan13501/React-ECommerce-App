import React from 'react';
import './App.css';
import HomePage from './Components/Homepage/HomePage.component'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.component'
import ShopPage from './Components/Shop/Shop.component'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
