import React from 'react';

import Logotipo from '../../assets/logo.png';
import BotaoLua from '../../assets/moon.png';
import BotaoSol from '../../assets/sun.png';

import './style.css';

const Topo = (props) => {

    return (
        <header className="topo">

            <img src={Logotipo} alt="Logotipo" />

            <button className="topo-botao" onClick={props.alterar}>

                <img src={props.estilo ? BotaoSol : BotaoLua} alt="Logotipo" />

            </button>

        </header>
    )
}

export default Topo;