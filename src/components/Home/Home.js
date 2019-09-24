import React from 'react';
import './Home.css';
// import fotoCapa from '../../assets/images/home1.png';
import cadastro from '../../assets/images/icones/adduser.png';
import video from '../../assets/images/icones/video.png';
import email from '../../assets/images/icones/email.png';
import contato from '../../assets/images/icones/contato.png';



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
					<div className="Subtitulo">
						<p>O objetivo deste site é proporcionar um treinamento para as pessoas fazerem parte de grupos de consumo da Cooperativa Cooperflora</p>
					</div>
				</div>
				<p className="ComoFunciona">Como funciona</p>
				<div className="Tutorial">
					{/* <div class="container"> */}
						{/* <div class="row"> */}
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<img className="Icone" src={cadastro} />
								<p>Você se cadastra no site.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<img className="Icone" src={video} />
								<p>Assiste o vídeo.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<img className="Icone" src={email} />
								<p>A Cooperativa recebe um e-mail.</p>
							</div>
							{/* <div className="Box col-md-3"> */}
							<div className="Box">
								<img className="Icone" src={contato} />
								<p>A Cooperativa entra em contato com você.</p>
							</div>
						{/* </div> */}
					{/* </div> */}
				</div>
			</div>


		</div>

	);
}

export default home;