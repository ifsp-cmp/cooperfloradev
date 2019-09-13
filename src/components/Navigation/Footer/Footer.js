import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import logoFacebook from '../../../assets/images/facebooklogo.jpg';
import logoEmail from '../../../assets/images/emaillogo.jpg';
import license from '../../../assets/images/license.png';
import logoIfspCampinas from '../../../assets/images/logoifspcampinas.png';

const footer = () => {
    return (
        <footer className="Footer">
            <div className="Bloco1">
                <p>Realização NEAES</p>
                <a href='http://www.cmp.ifsp.edu.br' >
                    <img className="IfspLogo" src={logoIfspCampinas} />
                </a>
            </div>
            <div className="Bloco2">
                <p>Cooperativa Cooperflora</p>
                 <img src={license} alt='Logo do Instituto Federal de São Paulo Campus Campinas'/>
                {/* <Link to="https://github.com/Joeyryanbridges">
                    <img src="giticon.png" className="githubIcon" />
                </Link> */}
            </div>
            <div className="Bloco3">
                <a href='https://www.facebook.com/Cooperflora1/'>
                    <img className="FacebookLogo" src={logoFacebook} />
                </a>
                <a href='#'>
                    <img className="EmailLogo" src={logoEmail} />
                </a>
            </div>
        </footer>
    );
}

export default footer;