import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Routes from './routes';
import Layout from './containers/Layout/Layout';

import * as actions from './store/actions/index';

// import Login from './components/Login/Login';

class App extends PureComponent {
  
  componentDidMount() {
    this.props.onVerifyLogin();    
  }

  render() {
    return ( 
      <Layout>
          <Routes />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVerifyLogin: () => dispatch(actions.verifyLogin())
  }
}

// export default connect(null, mapDispatchToProps)(App);
export default withRouter(connect(null, mapDispatchToProps)(App));