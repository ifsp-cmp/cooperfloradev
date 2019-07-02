import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';


const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
  </React.Fragment>
);

export default Routes;
