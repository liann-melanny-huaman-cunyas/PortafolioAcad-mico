import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Contador from './components/Contador';
import Resumen from './components/Resumen';
import './App.css';

const preguntas = [
  {
    id: 1,
    texto: '¿Cuánto es 2 + 2?',
    alternativas: ['3', '4', '5', '6'],
    respuesta: '4'
  },
  {
    id: 2,
    texto: '¿Cuál es el resultado de 5 * 3?',
    alternativas: ['15', '20', '10', '5'],
    respuesta: '15'
  },
  {
    id: 3,
    texto: '¿Cuánto es 10 - 4?',
    alternativas: ['6', '7', '5', '4'],
    respuesta: '6'
  },
  {
    id: 4,
    texto: '¿Cuál es el resultado de 9 / 3?',
    alternativas: ['2', '3', '4', '5'],
    respuesta: '3'
  },
  {
    id: 5,
    texto: '¿Cuánto es 7 + 5?',
    alternativas: ['11', '12', '13', '14'],
    respuesta: '12'
  },
  {
    id: 6,
    texto: '¿Cuál es el resultado de 8 * 2?',
    alternativas: ['14', '15', '16', '18'],
    respuesta: '16'
  },
  {
    id: 7,
    texto: '¿Cuánto es 20 - 9?',
    alternativas: ['11', '12', '10', '9'],
    respuesta: '11'
  },
  {
    id: 8,
    texto: '¿Cuál es el resultado de 12 / 4?',
    alternativas: ['2', '3', '4', '5'],
    respuesta: '3'
  },
  {
    id: 9,
    texto: '¿Cuánto es 3 + 6?',
    alternativas: ['8', '9', '10', '7'],
    respuesta: '9'
  },
  {
    id: 10,
    texto: '¿Cuál es el resultado de 15 - 5?',
    alternativas: ['11', '12', '10', '9'],
    respuesta: '10'
  },
  {
    id: 11,
    texto: '¿Cuánto es 4 * 4?',
    alternativas: ['16', '17', '18', '15'],
    respuesta: '16'
  },
  {
    id: 12,
    texto: '¿Cuál es el resultado de 18 / 3?',
    alternativas: ['5', '6', '7', '8'],
    respuesta: '6'
  },
  {
    id: 13,
    texto: '¿Cuánto es 11 + 8?',
    alternativas: ['18', '19', '20', '21'],
    respuesta: '19'
  },
  {
    id: 14,
    texto: '¿Cuál es el resultado de 7 * 5?',
    alternativas: ['30', '35', '25', '40'],
    respuesta: '35'
  },
  {
    id: 15,
    texto: '¿Cuánto es 22 - 8?',
    alternativas: ['14', '15', '16', '13'],
    respuesta: '14'
  },
  {
    id: 16,
    texto: '¿Cuál es el resultado de 24 / 6?',
    alternativas: ['3', '4', '5', '6'],
    respuesta: '4'
  },
  {
    id: 17,
    texto: '¿Cuánto es 5 + 7?',
    alternativas: ['11', '12', '13', '14'],
    respuesta: '12'
  },
  {
    id: 18,
    texto: '¿Cuál es el resultado de 6 * 3?',
    alternativas: ['18', '19', '20', '21'],
    respuesta: '18'
  },
  {
    id: 19,
    texto: '¿Cuánto es 30 - 10?',
    alternativas: ['20', '21', '22', '23'],
    respuesta: '20'
  },
  {
    id: 20,
    texto: '¿Cuál es el resultado de 9 + 8?',
    alternativas: ['16', '17', '18', '19'],
    respuesta: '17'
  }
];


const App = () => {
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [examenTerminado, setExamenTerminado] = useState(false);

  const handleAnswer = (id, respuesta) => {
    setRespuestas(prev => ({ ...prev, [id]: respuesta }));
  };

  const handleFinish = () => {
    setExamenTerminado(true);
  };

  const handleSkipQuestion = () => {
    handleAnswer(preguntas[indicePregunta].id, 'incorrecta');
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const correctas = preguntas.filter(p => respuestas[p.id] === p.respuesta).length;

  return (
    <div className="app">
    {!examenTerminado ? (
        <>
            <Contador onFinish={handleFinish} />
            {indicePregunta < preguntas.length ? (
                <div className="pregunta-container">
                    <h1>Examen Parcial</h1>
                    <h2>Pregunta N° {indicePregunta + 1}</h2>
                    <Pregunta
                        pregunta={preguntas[indicePregunta]}
                        handleAnswer={handleAnswer}
                        respuestaSeleccionada={respuestas[preguntas[indicePregunta].id]}
                    />
                    <p>{`Pregunta ${indicePregunta + 1} de ${preguntas.length}`}</p>
                    <button className="boton-saltar" onClick={handleSkipQuestion}>Saltar Pregunta</button>
                    <button className="boton-siguiente" onClick={handleNextQuestion}>Siguiente Pregunta</button>
                </div>
            ) : (
                <p>Has respondido todas las preguntas</p>
            )}
        </>
    ) : (
        <Resumen correctas={correctas} total={preguntas.length} />
    )}
</div>
  );
};

export default App;