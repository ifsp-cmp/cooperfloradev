import React from 'react';
import './Cestas.css';
import Abacate from '../../assets/images/Icones de Alimentos/abacate.png';
import Abobora from '../../assets/images/Icones de Alimentos/abobora.png';
import Abobrinha from '../../assets/images/Icones de Alimentos/abobrinha.png';
import Acerola from '../../assets/images/Icones de Alimentos/acerola.png';
import Alface from '../../assets/images/Icones de Alimentos/alface.png';
// import AlfaceLisa from '../../assets/images/Icones de Alimentos/alfacelisa.png';
import AlhoPoro from '../../assets/images/Icones de Alimentos/alhoporo.png';
import Almeirao from '../../assets/images/Icones de Alimentos/almeirao.png';
import ArrozOrganico from '../../assets/images/Icones de Alimentos/arroz.png';
import Banana from '../../assets/images/Icones de Alimentos/banana.png';
import Beringela from '../../assets/images/Icones de Alimentos/beringela.png';
import Beterraba from '../../assets/images/Icones de Alimentos/beterraba.png';
import Carambola from '../../assets/images/Icones de Alimentos/carambola.png';
import Cenoura from '../../assets/images/Icones de Alimentos/cenoura.png';
import CheiroVerde from '../../assets/images/Icones de Alimentos/cheiroverde.png';
import Chicoria from '../../assets/images/Icones de Alimentos/chicoria.png';
import Couve from '../../assets/images/Icones de Alimentos/couve.png';
import CouveFlor from '../../assets/images/Icones de Alimentos/couveflor.png';
import Espinafre from '../../assets/images/Icones de Alimentos/espinafre.png';
import Limao from '../../assets/images/Icones de Alimentos/limao.png';
// import Mamao from '../../assets/images/Icones de Alimentos/mamao.png';
import Mandioca from '../../assets/images/Icones de Alimentos/mandioca.png';
import MilhoVerde from '../../assets/images/Icones de Alimentos/milhoverde.png';
import MolhodePimentaCaseiro from '../../assets/images/Icones de Alimentos/molhodepimentacaseiro.png';
import PaoCaseiro from '../../assets/images/Icones de Alimentos/paocaseiro.png';
import Pimentao from '../../assets/images/Icones de Alimentos/pimentao.png';
import Quiabo from '../../assets/images/Icones de Alimentos/quiabo.png';
import Rabanete from '../../assets/images/Icones de Alimentos/rabanete.png';
import Repolho from '../../assets/images/Icones de Alimentos/repolho.png';
import Rucula from '../../assets/images/Icones de Alimentos/rucula.png';
import TemperoCaseiro from '../../assets/images/Icones de Alimentos/temperocaseiro.png';
// import Tomate from '../../assets/images/Icones de Alimentos/tomate.png';

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
                    <p>Composição 1</p>
                    <img className="Alimento"src={Alface} alt="Foto de alface"/>Alface<br />
                    <img className="Alimento"src={CheiroVerde}  alt="Foto de cheiro verde"/>Cheiro Verde<br />
                    <img className="Alimento"src={Abobrinha}  alt="Foto de abobrinha"/>Abobrinha<br />
                    <img className="Alimento"src={Quiabo}  alt="Foto de quiabo"/>Quiabo<br />
                    <img className="Alimento"src={MilhoVerde}  alt="Foto de milho verde"/>Milho Verde<br /><br />
                    <p>Composição 2</p>
                    <img className="Alimento"src={Couve} alt="Foto de couve"/>Couve<br />
                    <img className="Alimento"src={Chicoria}  alt="Foto de chicoria"/>Chicória<br />
                    <img className="Alimento"src={Mandioca}  alt="Foto de mandioca"/>Mandioca<br />
                    <img className="Alimento"src={Limao}  alt="Foto de limao"/>Limão<br />
                    <img className="Alimento"src={PaoCaseiro}  alt="Foto de pao caseiro"/>Pão Caseiro<br />
                </div>
                <div className="Cartao">
                    <p className="Meses">Abr - Mai - Jun </p>
                    <p>Composição 1</p>
                    <img className="Alimento"src={Almeirao} alt="Foto de almeirao"/>Almeirao<br />
                    <img className="Alimento"src={AlhoPoro}  alt="Foto de alho poro"/>Alho Poró<br />
                    <img className="Alimento"src={Banana}  alt="Foto de banana"/>Banana<br />
                    <img className="Alimento"src={Beterraba}  alt="Foto de beterraba"/>Beterraba<br />
                    <img className="Alimento"src={Beringela}  alt="Foto de beringela"/>Beringela<br /><br />
                    <img className="Alimento"src={ArrozOrganico}  alt="Foto de arroz"/>Arroz Orgânico<br /><br />
                    <p>Composição 2</p>
                    <img className="Alimento"src={Alface} alt="Foto de alface"/>Alface<br />
                    <img className="Alimento"src={Repolho}  alt="Foto de repolho"/>Repolho<br />
                    <img className="Alimento"src={Abobora}  alt="Foto de abobora"/>Abóbora<br />
                    <img className="Alimento"src={Rabanete}  alt="Foto de rabanete"/>Rabanete<br />
                    <img className="Alimento"src={Abacate}  alt="Foto de abacate caseiro"/>Abacate<br />
                    <img className="Alimento"src={Beringela}  alt="Foto de beringela"/>Beringela<br />
                </div>
                <div className="Cartao">
                    <p className="Meses">Jul - Ago - Set</p>
                    <p>Composição 1</p>
                    <img className="Alimento"src={Alface} alt="Foto de alface"/>Alface<br />
                    <img className="Alimento"src={Rucula}  alt="Foto de cheiro rucula"/>Rúcula<br />
                    <img className="Alimento"src={Carambola}  alt="Foto de carambola"/>Carambola<br />
                    <img className="Alimento"src={Mandioca}  alt="Foto de mandioca"/>Mandioca<br />
                    <img className="Alimento"src={MolhodePimentaCaseiro}  alt="Foto de molho de pimenta caseiro"/>Molho de Pimenta Caseiro<br /><br />
                    <p>Composição 2</p>
                    <img className="Alimento"src={Espinafre} alt="Foto de espinafre"/>Espinafre<br />
                    <img className="Alimento"src={CheiroVerde}  alt="Foto de cheiro verde"/>Cheiro Verde<br />
                    <img className="Alimento"src={Abobrinha}  alt="Foto de abobrinha"/>Abobrinha<br />
                    <img className="Alimento"src={Pimentao}  alt="Foto de pimentao"/>Pimentão<br />
                    <img className="Alimento"src={CouveFlor}  alt="Foto de couve flor"/>Couve Flor<br />
                </div>
                <div className="Cartao">
                    <p className="Meses">Out - Nov - Dez</p>
                    <p>Composição 1</p>
                    <img className="Alimento"src={Couve} alt="Foto de couve"/>Couve<br />
                    <img className="Alimento"src={AlhoPoro}  alt="Foto de alho poró"/>Alho Poró<br />
                    <img className="Alimento"src={Beterraba}  alt="Foto de beterrada"/>Beterraba<br />
                    <img className="Alimento"src={Banana}  alt="Foto de banana"/>Banana<br />
                    <img className="Alimento"src={Limao}  alt="Foto de limão verde"/>Limão<br /><br />
                    <img className="Alimento"src={Cenoura} alt="Foto de cenoura"/>Cenoura<br />
                    <p>Composição 2</p>
                    <img className="Alimento"src={Almeirao}  alt="Foto de almeirão"/>Almeirão<br />
                    <img className="Alimento"src={Espinafre}  alt="Foto de espinafre"/>Espinafre<br />
                    <img className="Alimento"src={Mandioca}  alt="Foto de mandioca"/>Mandioca<br />
                    <img className="Alimento"src={Acerola}  alt="Foto de acerola "/>Acerola<br />
                    <img className="Alimento"src={TemperoCaseiro} alt="Foto de tempero caseiro"/>TemperoCaseiro<br />
                </div>
            </div>
        </div>
    );
}

export default cestas;