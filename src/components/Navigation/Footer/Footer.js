import React from 'react';
import './Footer.css'

import logoFacebook from '../../../assets/images/logofacebook.png';
import logoEmail from '../../../assets/images/logoemail.png';
import license from '../../../assets/images/license.png';
import logoIfspCampinas from '../../../assets/images/logoifspcampinas.png';

const footer = () => {
    return (
        <footer className="Footer">
            <div className="Bloco1">
                <p>Realização NEAES</p>
                <a href='http://www.cmp.ifsp.edu.br' >
                    <img className="IfspLogo" src={logoIfspCampinas} alt='Logo do IFSP Campinas'/>
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
                <a href='https://www.facebook.com/Cooperflora1/' target="_blank" rel="noopener noreferrer">
                    <img className="FacebookLogo" src={logoFacebook} alt='Logo do Facebook'/>
                </a>
                <a href='mailto:contatocooperflora@gmail.com'>
                    <img className="EmailLogo" src={logoEmail} alt='Logo do Email'/>
                </a>
            </div>
        </footer>
    );
}

export default footer;