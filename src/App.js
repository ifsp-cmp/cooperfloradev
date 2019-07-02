import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import './App.css';

// import Login from './components/Login/Login';

class App extends PureComponent {
  render() {
    return (
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
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
