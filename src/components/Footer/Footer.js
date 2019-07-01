import React from 'react';
import "./Footer.css";
import './boot.css';
import logoInstagram from "../../assets/images/instagram.png";
import logoFacebook from "../../assets/images/facebook.png";
import logoGmail from "../../assets/images/gmail.png";

const footer =() => { 
	return(
		<div class="Footer" >
			<div className="row">
				<div className="col-sm">
					<img id="gmail" src={logoGmail}/> <p>contatocooperflora@gmail.com</p>
				</div>
				<div className="col-sm">
					<p id="licen">Licenciado XXX</p>
				</div>
				<div className="col-sm">
					<img id="insta" src={logoInstagram}/>
					<img id="face" src={logoFacebook}/>
				</div>
			</div>
		</div>
	)
};

export default footer; 