import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Los hooks por estandar inician con la palabra "use" y estos son funciones, tampoco pueden ser asincronos
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // El useEffect condiciona la ejecución de un bloque de código al recibir un arreglo de dependencias, cuando el arreglo está vaío solo lo ejecuta una vez
    useEffect(() => {
        // Recibe el nombre de una categoría y muestra un arreglo de los gifs que coincidan con la búsqueda
        getGifs(category).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state;
};
