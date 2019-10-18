import React from 'react';
import './App.css';
import HomePage from './Components/Homepage/HomePage.component'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
    </div>
  );
}

export default App;
