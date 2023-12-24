import React from 'react';

import Behance from '../../assets/behance.png';
import Dribble from '../../assets/dribble.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Linkedin from '../../assets/linkedin.png';
import LogoTipo from '../../assets/logo.png';
import Twitter from '../../assets/twitter.png';

import './style.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="largura-tela">

                <img src={LogoTipo} alt="Logotipo" />

                <p className="rodape-paragrafo">Ajudamos a criar uma personalidade digital contruindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

                <div className="rodape-redes">

                    <a className="rede" href="https://www.facebook.com/?locale=pt_BR">
                        <img src={Facebook} alt="Logo do Facebook" />
                    </a>

                    <a className="rede" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D">
                        <img src={Twitter} alt="Logo do Twitter" />
                    </a>

                    <a className="rede" href="https://www.linkedin.com/">
                        <img src={Linkedin} alt="Logo do Linkedin" />
                    </a>

                    <a className="rede" href="https://dribbble.com/">
                        <img src={Dribble} alt="Logo do Dribble" />
                    </a>

                    <a className="rede" href="https://www.behance.net/">
                        <img src={Behance} alt="Logo do Behance" />
                    </a>

                    <a className="rede" href="https://pt.wikipedia.org/wiki/Google%2B">
                        <img src={Google} alt="Logo do Google" />
                    </a>

                </div>

                <p className="rodape-assinatura">
                    Copyright 2022 <a href="https://www.linkedin.com/in/montemarcos/">Marcos Monte</a>
                </p>

            </div>

        </footer>
    )
}

export default Rodape;