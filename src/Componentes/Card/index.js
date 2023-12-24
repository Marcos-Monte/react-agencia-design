import React from 'react';

import './style.css';

const Card = (props) => {
    return (
        <div className="card">
            <p className="card-data">{props.data}</p>
            <h3 className="experiencia-titulo">{props.titulo}</h3>
            <p className="card-subtitulo">{props.subtitulo}</p>
            <p className="card-descricao">{props.descricao}</p>
        </div>
    )
}

export default Card;