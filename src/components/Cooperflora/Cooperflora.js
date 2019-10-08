import React from 'react';
import './Cooperflora.css';
import Cestas from '../Cestas/Cestas';

const cooperflora = () => {
    return (
        <div className="Cooperflora">
            <div className = "Apresentacao">
                <h3 className="Titulo"> Quem somos </h3>
                <p>A <strong>Cooperflora - Cooperativa da Agricultura Familiar de Americana, Cosmópolis e Piracicaba</strong> tem por objetivo apoiar, fomentar e atuar na organização para distribuição e venda dos produtos dos agricultores familiares, assentados da reforma agrária nessa micro região.</p>

                <p>A <strong>Cooperflora</strong> tem também por objetivo trabalhar no planejamento da produção e
                na conscientização dos agricultores para produção agroecológica e orgânica, respeitando assim 
                o meio ambiente e principalmente a saúde dos consumidores. Nesse caminho, já foi dado importante passo, 
                com a certificação orgânica por <strong>OCS( Organização de Controle Social)</strong>, da maioria de seus produtores cooperados.</p>
                
            </div>
            <div className="Cartoes">
                <div className="Cartao">
                    <div className="BordaCartao">
                        <strong>Missão</strong>
                    </div>
                    <div className="TextoCartao">
                        <p>Produzir alimentos de alto valor nutritivo seguindo os preceitos da agroecologia com preços justos, promovendo o desenvolvimento social e econômico de nosso cooperados proporcionando uma melhor qualidade de vida para nossos consumidores e produtores.</p>
                    </div>
                </div>
                <div className="Cartao">
                    <div className="BordaCartao">
                        <strong>Visão</strong>
                    </div>
                    <div className="TextoCartao">
                        <p>Ser referência na produção de alimentos agroecológicos.</p>
                    </div>
                </div>
                <div className="Cartao">
                    <div className="BordaCartao">
                        <strong>Valores</strong>
                    </div>
                    <div className="TextoCartao">
                        
                        <p>Transformação Social</p>
                        <p>Respeito ao meio ambiente</p>
                        <p>Cooperação</p>
                        <p>Sopdariedade</p>
                    </div>
                </div>
            </div>
            <hr />
            <Cestas />
        </div>
    );
}

export default cooperflora;