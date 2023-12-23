import React from 'react';

import Card from '../Card';

import './style.css';

const SecaoExperiencia = () => {
    return (
        <section className="experiencia">

            <div className="largura-tela">

                <h2 className="experiencia-titulo">Experiências De Trabalho</h2>
                <p className="experiencia-paragrafo">Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites de Marketing Digital, nos empenhamos diariamente para entragar resultados que tragam impacto aos nossos clientes.</p>

                <div className="experiencia-container">
                    <Card
                        data="JUNHO 2012 - 2016"
                        titulo="Web Designer"
                        subtitulo="Pied Piper StartUp."
                        descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />
                    <Card
                        data="AGOSTO 2016 - 2019"
                        titulo="Product Designer"
                        subtitulo="E Corp."
                        descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    />
                    <Card
                        data="FEVEREIRO 2019 - 2021"
                        titulo="Digital Consulting"
                        subtitulo="Arasaka Inc."
                        descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    />
                </div>

            </div>

        </section>
    )
}

export default SecaoExperiencia;