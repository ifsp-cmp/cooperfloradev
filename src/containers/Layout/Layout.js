import React, { Component } from 'react';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component{

  state ={
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    const oldState = {
		  ...this.state
	  }
    this.setState({showSideDrawer: !oldState.showSideDrawer});
  }

  render(){
    return (
      <div className="Layout">
        <Toolbar 
          clicked={this.sideDrawerClosedHandler}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className="Content">
          {this.props.children}
        </main>
      </div>
    );
  }
};

export default Layout;
