import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import SignInPage from './pages/signin';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/react-mbtbank' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
