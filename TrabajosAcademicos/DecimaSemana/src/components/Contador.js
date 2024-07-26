import React, { useState, useEffect } from 'react';
import './Contador.css';

const Contador = ({ onFinish }) => {
    const [tiempo, setTiempo] = useState(1800); // 30 minutos en segundos
    const [horaInicio] = useState(new Date());
    const [horaFin] = useState(new Date(new Date().getTime() + 1800 * 1000));

    useEffect(() => {
        const intervalo = setInterval(() => {
        setTiempo(prev => {
            if (prev === 1) {
            clearInterval(intervalo);
            onFinish();
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(intervalo);
    }, [onFinish]);

    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    };

    return (
        <div className="contador-esquina">
            <p className="hora-inicio">Hora de inicio: {horaInicio.toLocaleTimeString()}</p>
            <p className="hora-fin">Hora de finalización: {horaFin.toLocaleTimeString()}</p>
            <p className="tiempo-restante">Tiempo restante: <span className="morado-grande"> <br></br>{formatoTiempo(tiempo)}</span></p>
        </div>
    );
};

export default Contador;
