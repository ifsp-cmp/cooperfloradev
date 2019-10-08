import React from 'react';
import './Cestas.css';
import Alface from '../../assets/images/Icones de Alimentos/alface.png';
import AlfaceLisa from '../../assets/images/Icones de Alimentos/alfacelisa.png';
import Banana from '../../assets/images/Icones de Alimentos/banana.png';
import Beringela from '../../assets/images/Icones de Alimentos/beringela.png';
import Beterraba from '../../assets/images/Icones de Alimentos/beterraba.png';
import Cenoura from '../../assets/images/Icones de Alimentos/cenoura.png';
import Limao from '../../assets/images/Icones de Alimentos/limao.png';
import Mamao from '../../assets/images/Icones de Alimentos/mamao.png';
import Pimentao from '../../assets/images/Icones de Alimentos/pimentao.png';
import Tomate from '../../assets/images/Icones de Alimentos/tomate.png';

const cestas = () => {
    return (
        <div className="Cestas">
            <div className="Titulo">
                <h3>Composição das Cestas</h3>
            </div>
            <div className="TextoCestas">
                A composição das cestas de produtos orgânicos comercializados pela Cooperativa Cooperflora segue a sazonalidade temporal.
                Abaixo alguns exemplos de composição das cestas de acordo com o período do ano.   
            </div> 
            <div className="Cartoes">
                <div className="Cartao">
                    <p className="Meses">Jan - Fev - Mar </p>
                    <img className="Alimento"src={Banana} alt="Foto de banana"/>Banana<br />
                    <img className="Alimento"src={Alface}  alt="Foto de alface"/>Alface<br />
                    <img className="Alimento"src={Beterraba}  alt="Foto de beterraba"/>Beterraba<br />
                </div>
                <div className="Cartao">
                    <p className="Meses">Abr - Mai - Jun </p>
                    <img className="Alimento"src={Limao}  alt="Foto de limão"/>Limão<br />
                    <img className="Alimento"src={AlfaceLisa}  alt="Foto de alface lisa"/>Alface Lisa<br />
                    <img className="Alimento"src={Beringela}  alt="Foto de beringela"/>Beringela<br /> 
                </div>
                <div className="Cartao">
                    <p className="Meses">Jul - Ago - Set</p>
                    <img className="Alimento"src={Mamao}  alt="Foto de mamão"/>Mamao<br />
                    <img className="Alimento"src={Tomate}  alt="Foto de tomate"/>Tomate<br />
                    <img className="Alimento"src={Cenoura}  alt="Foto de cenoura"/>Cenoura<br />
                </div>
                <div className="Cartao">
                    <p className="Meses">Out - Nov - Dez</p>
                    <img className="Alimento"src={Limao}  alt="Foto de limão"/>Limão<br />
                    <img className="Alimento"src={AlfaceLisa}  alt="Foto de alface lisa"/>Alface Lisa<br />
                    <img className="Alimento"src={Pimentao}  alt="Foto de pimentão"/>Pimentão<br />
                </div>
            </div>
        </div>
    );
}

export default cestas;