import React from 'react';
import './Header.css';
import './boot.css';
import logo from './logo.jpg';

const header =() => { 
	
	return < div id="menu-container" class= "container-ms"> 
	
	<div id="container-logo">
	<img src={logo} id ="logo" alt="Logo da Cooperativa"/ >
	</div>				<nav class = " nav justify-content-end "> 

					
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
								<button type="button" class="btn btn-success"> Entrar</button>

							</ul>
					</nav>
		</div>
}; 


export default header; 