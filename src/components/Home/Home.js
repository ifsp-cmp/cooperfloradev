import React from 'react';
import './Home.css';
import fotoCapa from '../../assets/images/home1.png';

const home = () => {
	return (
		<div className='Home'>
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />

		</div>

	);
}

export default home;