import React from 'react';

import ImagemBanner from '../../assets/banner.png';

import './style.css';

const SecaoBanner = () => {
    return (
        <section className="banner">
            <img src={ImagemBanner} alt="Deginer" />
            <div className="banner-conteudo">
                <p className="banner-conteudo-estilizado">branding / ui / ux / tecnologia</p>
                <h1 className="banner-conteudo-titulo">Agencia de Branding <span className="conteudo-destaque">e design digital</span></h1>
            </div>
        </section>
    )
}

export default SecaoBanner;