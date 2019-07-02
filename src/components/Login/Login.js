import React from 'react';
import "./Login.css";
import '../Footer/boot.css';

const login =() => { 
	return(
	<form className="login" >
		<label for="email">E-mail: <input id="email" type="text" name="email"/></label><br/>
		<label for="senha">Senha: <input id="senha" type="password" name="senha"/></label><br/>
		<input type="checkbox" name="conect" value="sim"/>
		<label for="conect">Manter-me conectado.</label>
		<input type="submit" name="Enviar" value="Enviar"/> 
		<input type="reset" name="Cancelar" value="Cancelar"/>
	</form>
			
	
	)
};

export default login; 