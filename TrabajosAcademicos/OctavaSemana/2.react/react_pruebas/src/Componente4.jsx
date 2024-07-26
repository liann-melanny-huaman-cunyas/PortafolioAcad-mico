import React from 'react';
import './App.css';

const Componente4 = ({ objAlum, actualizarObjAlum }) => {
    return (
        <div className='contenido_componente4'>
            <h4>Componente 4</h4>
            <div className="card">
                <h5>CARD DEL ALUMNO</h5>
                <div className='datos_alumno'>
                    <p>Nombre: {objAlum.nombre}</p>
                    <p>Dirección: {objAlum.dirección}</p>
                    <p>Ciudad: {objAlum.ciudad}</p>
                </div>
                <button onClick={actualizarObjAlum}>Actualizar Alumno</button>
            </div>
        </div>
    );
};

export default Componente4;
