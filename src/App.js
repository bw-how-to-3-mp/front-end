import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import PrivateRoute from './routing/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
