import React from 'react';
import './Projeto.css';
import fotoAndre from '../../assets/images/fotoandre.jpg';
import fotoGabi from '../../assets/images/fotogabi.png';
import fotoLuiz from '../../assets/images/fotoluiz.png';

const projeto = () => {
    return (
        <div className='Projeto'>
            <div className="Descricao">
                <h3>Projeto</h3>
                <p id="texto">Este projeto consiste na criação deste site, visando a aprimoração da forma como os consumidores têm acesso a formação político-pedagógica necessária para poderem ingressarem nos grupos de consumo da cooperativa Cooperflora, passando a formação solicitada de somente presencial para presencial ou não presencial.</p>
                <p id="texto">Os grupos de consumo têm crescido, porém nem todos os seus participantes sabem da importância da política da produção  agroecológica e baseado nesse motivo a cooperativa disponibiliza uma formação, até o momento presencial, para os participantes com o intuito de apresentar a agroecologia cenário dos assentamentos rurais antes de se iniciar de fato a participação em algum dos grupos de consumo.</p>
                <p id="texto">A partir da criação do site, essa formação se torna mais flexível, para que desta forma os grupos possam ser ampliados. Além de facilitar o acesso das pessoas à formação também permite que os membros da cooperativa possam ter um banco de dados das pessoas que querem fazer parte dos grupos de consumo dos produtos agroecológicos e que as pessoas tenham acesso a mais informações sobre a cooperativa.</p>
            </div>
            <hr />

            <h3>Equipe</h3>
            <p id="texto"> A equipe que desenvolveu o projeto é formada por:</p>
            <div className="Equipe">
                <div>
                    <img className='foto' src={fotoAndre} alt='Foto do André Bordignon'/>
                    <p><strong>André Luís Bordignon</strong></p>
                    <p>Coordenador</p>
                </div>
                <div>
                    <img className='foto' src={fotoGabi} alt='Foto da Gabriela Costa'/>
                    <p><strong>Gabriela Fernandes Almeida Costa</strong></p>
                    <p>Desenvolvedora</p>
                </div>
                <div>
                    <img className='foto' src={fotoLuiz} alt='Foto do Luiz Roberto'/> 
                    <p><strong>Luiz Roberto da Cruz Santos</strong></p>
                    <p>Desenvolvedor</p>
                </div>
            </div>
            <hr />
            <div className="Desenvolvimento">
                <h3>Desenvolvimento</h3>
                <p>Para o desenvolvimento do projeto foram utilizadas as linguagens de desenvolvimento de uma site web como HTML (Hypertext Markup Language), CSS (Cascading Style Sheets) e Javascript. </p>
                <p>HTML é uma linguagem de marcação utilizada para produção de páginas na web. CSS é uma linguagem que adiciona estilo a uma página web como cores, tipos de fontes, animações entre outras possibilidades. </p>
                <p>JavaScript é uma linguagem de programação baseada em scripts, padronizada, interpretada e empregada para deixar a experiência de navegação na web dinâmica.</p>
                <p>Em conjunto com essas linguagens foi utilizado o React, que é uma biblioteca JavaScript de código aberto, declarativa, eficiente e flexível para criar interfaces de usuário, o Bootstrap, que é um framework front-end com código-fonte aberto que ajuda a tornar o site mais responsivo, além de possuir diversos componentes em JavaScript (jQuery) que ajudam a implementar diversos componentes. </p>
                <p>Para o sistema de autenticação e armazenamento dos dados foi utilizado a ferramenta Firebase.</p>
            </div>
        </div>
        );
    }
    
    export default projeto;