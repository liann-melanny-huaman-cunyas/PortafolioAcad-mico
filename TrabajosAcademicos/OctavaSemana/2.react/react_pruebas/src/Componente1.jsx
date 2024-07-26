import React, { useState } from 'react';
import Componente2 from './Componente2';

const Componente1 = () => {
    const [objAlum, setObjAlum] = useState({
        nombre: 'Jesus',
        dirección: 'Av. Esperanza ',
        ciudad: 'El Tambo'
    });

    const actualizarObjAlum2 = () => {
        setObjAlum({
            nombre: 'Melanny',
            dirección: 'Calle 123',
            ciudad: 'Huancayo'
        });
    };

    return (
        <div className='contenido_componente1'>
            <div  className='mostrar_componente1'>
                <h1>Componente 1</h1>
                <div>
                    <p>Nombre: {objAlum.nombre}</p>
                    <p>Dirección: {objAlum.dirección}</p>
                    <p>Ciudad: {objAlum.ciudad}</p>
                </div>
            </div>
            <Componente2 objAlum={objAlum} actualizarObjAlum={actualizarObjAlum2} />
        </div>
    );
};

export default Componente1;
