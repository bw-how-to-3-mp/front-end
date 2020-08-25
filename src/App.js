import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import PrivateRoute from './routing/PrivateRoute';
import Home from './components/Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
