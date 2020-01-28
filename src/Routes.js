import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Base from './components/Base';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      {/* <Route path="/" component={Base} /> */}
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
