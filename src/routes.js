import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './containers/Login/Login';
import Cadastro from './containers/Cadastro/Cadastro';
import Logout from './containers/Login/Logout';
import ForgotPassword from './containers/Login/ForgotPassword';
import ListarUsuarios from './containers/ListarUsuarios/ListarUsuarios';
import Projeto from './components/Projeto/Projeto';
import Cooperflora from './components/Cooperflora/Cooperflora';
import Video from './components/Video/Video';


const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route exact path="/listarusuarios" component={ListarUsuarios} />
    <Route exact path="/projeto" component={Projeto} />
    <Route exact path="/cooperflora" component={Cooperflora} />
    <Route exact path="/video" component={Video} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/esqueciminhasenha" component={ForgotPassword} />
  </React.Fragment>
);

export default Routes;
