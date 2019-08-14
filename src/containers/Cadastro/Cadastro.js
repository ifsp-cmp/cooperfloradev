import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../store/actions/index';

import './Cadastro.css';
// import fotoCapa from '../../assets/images/home.png';
import Usuario from './usuario.jpg';

class Cadastro extends Component{
	
	state = {
		loginForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Digite o nome'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			fone: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Digite o fone'
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Digite o e-mail'
				},
				value: '',
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
		},
		formIsValid: false,
		loading: false
	}

	checkValidity(value, rules) {
	    let isValid = true;
	    if (!rules) {
	      return true;
	    }

	    if (rules.required) {
	      isValid = value.trim() !== '' && isValid;
	    }

	    if (rules.minLength) {
	      isValid = value.length >= rules.minLength && isValid
	    }

	    if (rules.maxLength) {
	      isValid = value.length <= rules.maxLength && isValid
	  	}
	  	return isValid;
    }

	inputChangedHandler(event, inputIdentifier) {
		const updatedLoginForm = {
			...this.state.loginForm
	  	}
		const updatedFormElement = {
			...updatedLoginForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(event.target.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedLoginForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for(let inputIdentifier in updatedLoginForm){
			// console.log(updatedLoginForm[inputIdentifier]);
			formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
		}

		this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
	 }

	submitHandler = (event) => {
		event.preventDefault();
		console.log("Cheguei no submitHandler");
		this.props.onAddUser();
	}
	
	render(){
		const formElementArray = [];
		for (let key in this.state.loginForm){
			formElementArray.push({
				id: key,
				config: this.state.loginForm[key]
			});
		}
		// console.log(formElementArray);

		let form = null;
		form = (
			<div>
				{formElementArray.map(formElement => {
					let inputClass = ["Input"];
					if(!formElement.config.valid && formElement.config.touched){
						inputClass = ["Input", "Invalid"];
					};
					return (<input
						className={inputClass.join(" ")}
						key={formElement.id}
						id={formElement.id}
						type={formElement.config.elementConfig.type}
						placeholder={formElement.config.elementConfig.placeholder}
						value={formElement.config.value}
						onChange={(event) => this.inputChangedHandler(event, formElement.id)} />)
				})}
			</div>
		);

		return(
			<div className="Cadastro">
				<form onSubmit={this.submitHandler}>
					{form}
					<button className="Button" disabled={!this.state.formIsValid}>Enviar</button>
				</form>
			</div>
		);
	};
}
	
const mapStateToProps = state => {
	return {
		name: state.user.name,
		name: state.user.phone,
		email: state.user.email,
		password: state.user.password
	};
}

const mapDispatchToProps = dispatch => {
	return{
		onAddUser: (name, phone, email, password) => dispatch(userActions.addUser(name, phone, email, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);