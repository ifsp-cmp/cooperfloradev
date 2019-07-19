import React from 'react';
import './Cadastro.css';
import '../Header/boot.css';
import fotoCapa from '../../assets/images/home.png';
import Usuario from './usuario.jpg'

const cadastro=()=>{

	return (
		<div className="container-md" id="container-formularioCadastro">
			<div id ="cont" className="row-md-3">
    			<img src={Usuario} id ="logo" alt="Imagem do Usuário"/ >
			</div> 
			<form className= "row-md-3">
				<div className="form-group row">
			    <label className="col-sm-2 col-form-label">Nome</label>
			    <input  type="text"  className="form-control-plaintext col-sm-6" placeholder="Digite Seu Nome"></input>

			  </div>

			  <div className="form-group row">
			    <label  className="col-sm-2 col-form-label" >Telefone</label>
			    <input type="text" className="form-control-plaintext col-sm-6"  placeholder="(xx) 9 1234-5678"></input>
			  </div>

			 <div class="form-group row">
				    <label  class="col-sm-2 col-form-label">Email</label>
				<div class="col-sm-10">
				      <input type="text"  className="form-control-plaintext"  placeholder="email@exemplo.com"></input>
			   	</div>
 			 </div>

			  <div class="form-group row">
			    <label  className="col-sm-2 col-form-label">Senha</label>
			    <div className="col-sm-10">
			      <input type="password" class="form-control-plaintext"  placeholder="Password"></input>
			    </div>
			 </div>
		</form>
		
<button type="button" class="btn btn-outline-success">Confirmar</button>
<button type="button" class="btn btn-outline-danger">Cancelar</button>
		
		

	</div>
	);
}

export  default cadastro;