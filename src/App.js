import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './routing/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';

function App() {

  return (
    <div className="App">

      <Router>
        <Route path='/userlogin'>
          <Login />
        </Route>

        <Route path='/usersignup'>
          <Signup />
        </Route>

        <PrivateRoute exact path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;
