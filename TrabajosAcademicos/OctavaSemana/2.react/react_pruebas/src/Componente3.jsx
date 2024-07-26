import React from 'react';
import Componente4 from './Componente4';

const Componente3 = ({ objAlum, actualizarObjAlum }) => {
    return (
        <div className='contenido_componente3'>
            <h3>Componente 3</h3>
            <Componente4 objAlum={objAlum} actualizarObjAlum={actualizarObjAlum} />
        </div>
    );
};

export default Componente3;
