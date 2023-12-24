// Importação de ferramentas React
import React from 'react';

// Importando imagens
import Logotipo from '../../assets/logo.png';
import BotaoLua from '../../assets/moon.png';
import BotaoSol from '../../assets/sun.png';

// Importando arquivo de estilização
import './style.css';

// Componente fazendo uso de  'props'
const Topo = (props) => {

    return (
        <header className="topo">

            <img src={Logotipo} alt="Logotipo" />

            {/* Evento clique receberá a função de outro componente via props */}
            <button className="topo-botao" onClick={props.alterarEstilo}>
                {/* Imagem do botão será definida mediante 'evento clique' que executará uma função existente em outro componente via props */}
                <img src={props.imagemBotao ? BotaoSol : BotaoLua} alt="Logotipo" />

            </button>

        </header>
    )
}

export default Topo;