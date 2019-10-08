import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';
import cooperfloraLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className='Logo' style={{height :props.height}}>
         <NavLink  to='/home' exact>
            <img src={cooperfloraLogo} alt='Logo do Cooperflora'/>
        </NavLink>
    </div>
); 
export default logo;