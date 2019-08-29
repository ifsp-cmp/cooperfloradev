import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './routes';
import Layout from './containers/Layout/Layout';
import * as actions from './store/actions/index';

// import Login from './components/Login/Login';

class App extends PureComponent {
  
  componentDidMount() {
    //
  }

  render() {
    return ( 
      <Layout>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (email, password) => dispatch(actions.login(email, password))
//   }
// }

// export default connect(null, mapDispatchToProps)(App);
export default App;