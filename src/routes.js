import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';


const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Cadastro} />
  </React.Fragment>
);

export default Routes;
