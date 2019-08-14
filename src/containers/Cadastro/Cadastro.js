import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cadastro.css';
// import fotoCapa from '../../assets/images/home.png';
import Usuario from './usuario.jpg';

class Cadastro extends Component{
	
	state = {
		userData: {
			controls: {
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'Digite o e-mail'
					},
					value: this.props.email,
					validation: {
						required: true,
						isEmail: true
					},
					valid: false,
					touched: false
				},
				password: {
					elementType: 'input',
					elementConfig: {
						type: 'password',
						placeholder: 'Senha'
					},
					value: '',
					validation: {
						required: true,
						minLength: 6
					},
					valid: false,
					touched: false
				}
			}
		}
	}
	
	render(){
		console.log(this.props.email);
		return (
			<div className="container-md" id="container-formularioCadastro">
				<div id ="cont" className="row-md-3">
					<img src={Usuario} id ="logo" alt="Imagem do Usuário" />
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
					
					<div className="form-group row">
					<label  className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
					<input type="text"  className="form-control-plaintext"  placeholder="email@exemplo.com" defaultValue={this.props.email}></input>
					</div>
					</div>
					
					<div className="form-group row">
					<label  className="col-sm-2 col-form-label">Senha</label>
					<div className="col-sm-10">
					<input type="password" className="form-control-plaintext"  placeholder="Password"></input>
					</div>
					</div>
				</form>
				
				<button type="button" className="btn btn-outline-success">Confirmar</button>
				<button type="button" className="btn btn-outline-danger">Cancelar</button>
			</div>
			);
		};
	};
	
	const mapStateToProps = state => {
		return {
			email: state.user.email,
			password: state.user.password
		};
	}
	
	export default connect(mapStateToProps)(Cadastro);