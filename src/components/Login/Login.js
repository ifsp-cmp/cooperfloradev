import React from 'react';
import "./Login.css";
import '../Footer/boot.css';
import PageLayout from '../../components/PageLayout/PageLayout';


const login =() => { 
	return(
	<PageLayout>
		<form className="login" >
			<label for="email">E-mail: <input id="email" type="text" name="email"/></label><br/>
			<label for="senha">Senha: <input id="senha" type="password" name="senha"/></label><br/>
			<input type="checkbox" name="conect" value="sim"/>
			<label for="conect">Manter-me conectado.</label><br/><br/>
			<input type="submit" name="Enviar" value="Enviar" id="enviar"/> 
			<input type="reset" name="Cancelar" value="Cancelar" id="cancelar"/>
		</form>
	</PageLayout>
			
	
	)
};

export default login; 