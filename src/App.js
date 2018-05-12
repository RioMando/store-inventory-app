import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import ErrorLogin from './components/Login/ErrorLogin'

const App = () => (

  <div className="container">
    <Login />
    
    <ErrorLogin />
  </div>
  
);

export default App;
