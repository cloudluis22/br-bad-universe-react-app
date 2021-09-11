import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Redirect,
} from 'react-router-dom';

import { MainScreen } from '../screens/MainScreen';
import { BrBaScreen } from '../screens/BrBaScreen';
import { BCSScreen } from '../screens/BCSScreen';

export const AppRouter = () => {
  return (
    <Router>
      <HashRouter>
        <Route exact path='/' component={MainScreen} />
        <Route exact path='/brba' component={BrBaScreen} />
        <Route exact path='/bcs' component={BCSScreen} />

        <Redirect to='/' />
      </HashRouter>
    </Router>
  );
};
