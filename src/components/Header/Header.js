import React from 'react';
import firebase from 'firebase';
import './Header.css';
import logo from './logo.jpg';

const header =() => { 
	
	// let user = firebase.auth().currentUser;
	// console.log(user);
	// ? console.log("Usuários logado")
	// : console.log("usuários não logado");

	return < div id="menu-container" className= "container-ms"> 
		<div id="container-logo">
		<img src={logo} id ="logo" alt="Logo da Cooperativa"/ >
		</div>				
			<nav className = " nav justify-content-end "> 
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active" href="/">Home</a>
					</li>
					<li>
						<a className="nav-link active" href="/cooperflora">Cooperflora</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/cadastro">Localização</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/cadastro">Cadastro</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/projeto">O projeto</a>
					</li>
					<a className="btn btn-success" href="/login">Entrar</a>
					<a className="btn btn-success" href="/logout">Sair</a>
				</ul>
			</nav>
		</div>
}; 


export default header; 