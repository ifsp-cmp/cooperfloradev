import React from 'react';
import "./Footer.css";
import logoInstagram from "../../assets/images/instagram.png";
import logoFacebook from "../../assets/images/facebook.png";

const footer =() => { 
	return(
		<div class="Footer">
			<img id="insta" src={logoInstagram}/>
			<img id="face" src={logoFacebook}/>
		</div>
	)
};

export default footer; 