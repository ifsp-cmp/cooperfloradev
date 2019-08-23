import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import PageLayout from './components/PageLayout/PageLayout';
import './App.css';

// import Login from './components/Login/Login';

class App extends PureComponent {
  render() {
    return ( 
      <PageLayout>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
        </PageLayout>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
   
//     <Header/> 
//     <Home/>
//     <Footer/>
     
//     </div>
//   );
// }

export default App;