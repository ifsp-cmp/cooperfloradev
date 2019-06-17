import React from 'react';
import './Header.css';
import './boot.css';
import logo from './logo.jpg';

const header =() => { 
	
	return < div class= "container-ms"> 
	<nav class = " nav justify-content-end "> 
	<img src={logo} id ="logo" alt="Logo da Cooperativa"/ >
	<ul class="nav justify-content-end">
	<li class="nav-item">
	<a class="nav-link active" href="#">Cooperflora</a>
	</li>
	<li class="nav-item">
	<a class="nav-link" href="#">Localização</a>
	</li>
	<li class="nav-item">
	<a class="nav-link" href="#">Cadastro</a>
	</li>
	<li class="nav-item">
	<a class="nav-link" href="#">O projeto</a>
	</li>
	</ul>
	<button type="button" class="btn btn-success"> Entrar</button>
	</nav>
	</div>
}; 


export default header; 