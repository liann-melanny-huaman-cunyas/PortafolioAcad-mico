import React from 'react';
import Componente3 from './Componente3';

const Componente2 = ({ objAlum, actualizarObjAlum }) => {
    return (
        <div className='contenido_componente2'>
            <h2>Componente 2</h2>
            <Componente3 objAlum={objAlum} actualizarObjAlum={actualizarObjAlum} />
        </div>
    );
};

export default Componente2;
