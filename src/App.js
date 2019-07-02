import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro'


function App() {
  return (
    <div className="App">
   
    <Header/> 
    <Home/>
    <Footer/>
    <Cadastro/>
     
    </div>
  );
}

export default App;
