import React from 'react';
import './Pregunta.css';


const Pregunta = ({ pregunta, handleAnswer, respuestaSeleccionada }) => {
    const letras = ['A', 'B', 'C', 'D'];

    return (
    <div className="pregunta-container">
        <h2>{pregunta.texto}</h2>
        <ul>
            {pregunta.alternativas.map((alternativa, index) => (
                <div key={index} className="alternativa">
                    <label>
                        <input
                            type="radio"
                            name={`pregunta_${pregunta.id}`}
                            value={alternativa}
                            checked={respuestaSeleccionada === alternativa}
                            onChange={() => handleAnswer(pregunta.id, alternativa)}
                        />
                        {`${letras[index]} . ${alternativa}`}
                    </label>
                </div>
            ))}
        </ul>
    </div>
    );
};

export default Pregunta;
