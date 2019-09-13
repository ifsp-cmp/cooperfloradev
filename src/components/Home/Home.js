import React from 'react';
import './Home.css';
// import fotoCapa from '../../assets/images/home1.png';

const home = () => {
	return (
		<div className='Home'>
			{/* <div className='Text1'>
				Bem vindo, bem vinda ao site de formação da Cooperativa Cooperflora.
			</div>
			<div className="Text2">
				O objetivo desse site é permitir que as pessoas assistam o vídeo da formação e comecem a participar de um grupo de consumo de cestas orgãnicas.
			</div> */}


			{/* <img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" />
			<img src={fotoCapa} alt="Foto da Capa" /> */}
			<div className="Home">
				<div className="Titulo">
					<p>Bem vindo, bem vinda ao site de formação da Cooperativa Cooperflora</p>
				</div>
				<p className="ComoFunciona">Como funciona</p>
				<div className="Tutorial">
					{/* <div class="container"> */}
						{/* <div class="row"> */}
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<p>1. Você se cadastra no site.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<p>2. Assiste o vídeo da Cooperativa Cooperflora.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<p>3. A Cooperativa recebe um e-mail dizendo que você já está habilitado a fazer parte de um grupo de consumo.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<p>4. A Cooperativa entra em contato com você.</p>
							</div>
						{/* </div> */}
					{/* </div> */}
				</div>
			</div>


		</div>

	);
}

export default home;