import React, { Component } from 'react';
import "./Login.css";
import '../Footer/boot.css';
import PageLayout from '../../components/PageLayout/PageLayout';


class Login extends Component{ 

	state = {
		loginForm: {
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

	 formHandler = (event) => {
	 	event.preventDefault();
	 	const formData = {};
	 	for(let formElementIdentifier in this.state.loginForm){
	 		formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
	 	}
	 }

	render(){
		const formElementArray = [];
		for (let key in this.state.loginForm){
			formElementArray.push({
				id: key,
				config: this.state.loginForm[key]
			});
		}

		let form = null;
		form = (
			<div>
				<form onSubmit={this.formHandler}>
					{formElementArray.map(formElement => {
						let inputClass = ["Input"];
						if(!formElement.config.valid && formElement.config.touched){
							inputClass = ["Input", "Invalid"];
						};
						return (<input
							className={inputClass.join(" ")}
							key={formElement.id}
							id={formElement.id}
							type={formElement.config.elementType}
							placeholder={formElement.config.elementConfig.placeholder}
							value={formElement.config.value}
							onChange={(event) => this.inputChangedHandler(event, formElement.id)} />)
					})}
				</form>
				<button className="Button" disabled={!this.state.formIsValid}>Enviar</button>
			</div>
		);

		return(
			<div className="Login">
				{form}
			</div>
		);
	}
};

export default Login; 