import React from 'react';
import './Resumen.css';

const Resumen = ({ correctas, total }) => {
  const porcentaje = (correctas / total) * 100;

    return (
        <div className="resumen">
        <h2>Resumen del examen</h2>
        <p>Preguntas respondidas correctamente: {correctas}</p>
        <p>Preguntas erradas: {total - correctas}</p>
        <p>Nota en porcentaje: {porcentaje.toFixed(2)}%</p>
        </div>
    );
};

export default Resumen;
