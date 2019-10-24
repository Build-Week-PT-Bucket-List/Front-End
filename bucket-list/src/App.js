import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
// import RegisterForm from './components/Register.js';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">

      <h1 className="pageTitle">BucketArr</h1>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
