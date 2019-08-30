import React from 'react';

import './Logo.css';
import cooperfloraLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className='Logo' style={{height :props.height}}>
        <img src={cooperfloraLogo} alt='Logo do Cooperflora'/>
    </div>
);

export default logo;