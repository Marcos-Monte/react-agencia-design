import React from 'react';

import Logotipo from '../../assets/logo.png';
import BotaoLua from '../../assets/moon.png';
// import BotaoSol from '../../assets/sun.png';

import './style.css';

const Topo = () => {
    return (
        <header>
            <div className="largura-tela">
                <img src={Logotipo} alt="Logotipo" />
                <button>
                    <img src={BotaoLua} alt="Logotipo" />
                </button>
            </div>
        </header>
    )
}

export default Topo;