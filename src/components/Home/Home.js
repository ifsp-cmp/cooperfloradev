import React from 'react';
import './Home.css';
import fotoCapa from '../../assets/images/home.png';

const home = () => {
	return (
		<div className='Home'>
			<div>
				<img className="home" src={fotoCapa} alt="Foto da Capa" />
			</div>
		</div>
	);
}

export default home;