import React from 'react';

import './style.css';

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.data}</p>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Card;