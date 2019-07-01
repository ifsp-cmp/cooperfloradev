import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
   
    <Header/> 
    <Home/>
    <Footer/>
     
    </div>
  );
}

export default App;
